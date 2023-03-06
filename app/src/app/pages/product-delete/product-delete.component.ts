import { Component } from '@angular/core';
import { ProductStateService } from 'src/app/services/product-state.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent {
  constructor(private ProductState: ProductStateService) {}
  delete(): void {
    let index = this.ProductState.productList.findIndex((x) => x.id == 2);
    this.ProductState.productList.splice(
      index,
      1
    );
  }
}
