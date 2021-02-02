import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  showLoader: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loaderState = this.showLoader.asObservable();

  constructor() { }

  setLoaderState(state: boolean) {
    this.showLoader.next(state);
  }
}
