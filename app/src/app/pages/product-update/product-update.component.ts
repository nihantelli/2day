import { Component } from '@angular/core';
import { ProductStateService } from 'src/app/services/product-state.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent {
  constructor(private ProductState: ProductStateService) {}
  update(): void {
    let indexToUpdate = this.ProductState.productList.findIndex(
      (x) => x.id == 2
    );
    this.ProductState.productList[indexToUpdate].name = 'kalem 200';
  }
}
