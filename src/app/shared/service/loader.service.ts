import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading = new BehaviorSubject<boolean>(false);
  public loading$ = this.loading.asObservable().pipe(debounceTime(50));

  constructor() {}

  show() {
    this.loading.next(true);
  }
  hide() {
    this.loading.next(false);
  }
}
