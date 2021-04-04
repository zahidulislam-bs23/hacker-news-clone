import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  mLoading: Subject<boolean> = new Subject<boolean>();
  constructor() {}

  get loading$() {
    return this.mLoading;
  }

  showLoader() {
    this.mLoading.next(true);
  }

  dismissLoader() {
    this.mLoading.next(false);
  }
}
