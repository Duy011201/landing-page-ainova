// loading.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  /*
   * The loadingSubject is a BehaviorSubject that emits a boolean value.
   * The loading$ observable is created from the loadingSubject.
   * The show() method is used to emit true to the loadingSubject.
   * The hide() method is used to emit false to the loadingSubject.
   */
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }
}
