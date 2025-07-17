import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { LoadingComponent } from '@app/core/component/loading/loading.component';
import { CommonModule } from '@angular/common';
import { PrimeNG } from 'primeng/config';
import { FooterComponent } from '@app/components/footer/footer';
import { HeaderComponent } from '@app/components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule, FooterComponent, LoadingComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  /*
   * Default value for comp header and comp footer
   */
  public showHeader: boolean = false;
  public showFooter: boolean = false;

  /*
   * Get value from router
   */
  constructor(private router: Router, private primeNG: PrimeNG) {
    this.router.events
      .pipe(
        filter((event) => event instanceof ActivationEnd),
        map((event) => (<ActivationEnd>event).snapshot),
        map((snapshot) => (<ActivatedRouteSnapshot>snapshot).data),
      )
      .subscribe((data) => {
        const dataRouter = Object.assign({}, data);
        if (Object.keys(dataRouter).length > 0) {
          this.showHeader = !!dataRouter?.['showHeader'];
          this.showFooter = !!dataRouter?.['showFooter'];
        }
      });
  }

  ngOnInit(): void {
    this.primeNG.ripple.set(true);
  }
}
