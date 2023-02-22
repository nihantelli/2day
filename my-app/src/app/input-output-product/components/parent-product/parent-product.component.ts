import { Component } from '@angular/core';
import { Product } from '../../models/product';

import { ProductService } from '../../product.service';
import { RealProductAPIService } from '../../../real-product-api.service';

@Component({
  selector: 'app-parent-product',
  templateUrl: './parent-product.component.html',
  styleUrls: ['./parent-product.component.css'],
})
export class ParentProductComponent {
  productList: ReadonlyArray<Product>;
  selectedProduct: Product | undefined;

  constructor(
    private productService: ProductService,
    private ProductService: RealProductAPIService
  ) {
    this.productList = this.productService.getAll();
    console.log(this.productList);
  }
  get toggleProductDetail() {
    return this.selectedProduct != undefined;
  }
  showDetail(productId: number) {
    this.selectedProduct = this.productService.getById(productId);
  }
}
