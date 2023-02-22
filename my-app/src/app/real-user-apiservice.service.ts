import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RealUserAPIServiceService {
  constructor() {}
  getAll(): string[] {
    return ['real1', 'real2', 'real3'];
  }
}
