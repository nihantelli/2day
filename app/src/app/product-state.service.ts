import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductStateService {
  public productList: Product[] = [];
  constructor() {}
}
export interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
}
