import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface Breadcrumb {
  label: string;
  link: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<Breadcrumb[]>([]);
  public breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbsSubject.next(this.getBreadcrumb(this.activatedRoute.snapshot));
      });
  }

  private getBreadcrumb(route: ActivatedRouteSnapshot): Breadcrumb[] {
    let breadcrumbs: Breadcrumb[] = [];
    let currentRoute: ActivatedRouteSnapshot | null = route;

    while (currentRoute) {
      if (currentRoute.data['breadcrumb']) {
        let label = currentRoute.data['breadcrumb'];
        let path = this.getRoutePath(currentRoute);
        breadcrumbs.unshift({ label, link: path });
      }
      currentRoute = currentRoute.parent;
    }

    return breadcrumbs;
  }

  private getRoutePath(route: ActivatedRouteSnapshot): string {
    let path = '';
    let currentRoute: ActivatedRouteSnapshot | null = route;
    while (currentRoute) {
      if (currentRoute.url.length > 0) {
        path = '/' + currentRoute.url.map(segment => segment.path).join('/') + path;
      }
      currentRoute = currentRoute.parent;
    }
    return path || '/';
  }
}
