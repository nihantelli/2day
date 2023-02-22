import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeUserAPIServiceService {
  constructor() {}
  getAll(): string[] {
    return ['fake1', 'fake2', 'fake3'];
  }
}
