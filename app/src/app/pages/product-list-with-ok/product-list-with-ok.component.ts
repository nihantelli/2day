import { Component, EventEmitter, Output } from '@angular/core';
import { ProductStateService } from 'src/app/services/product-state.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list-with-ok',
  templateUrl: './product-list-with-ok.component.html',
  styleUrls: ['./product-list-with-ok.component.css'],
})
export class ProductListWithOkComponent {
  products: Product[] = [];

  constructor(private productState: ProductStateService) {
    this.products = this.productState.productList.filter((x) => x.isOk == true);
  }

  load() {
    this.products = this.productState.productList.filter((x) => x.isOk == true);
  }
}
