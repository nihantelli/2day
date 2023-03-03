import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectProviderService {
  public nameObservable = new Subject();

  constructor() {}
  publish(data: any) {
    this.nameObservable.next(data);
  }
  complete() {
    this.nameObservable.complete();
  }
}
