import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css'],
})
export class StructuralDirectiveComponent {
  toggleShow: boolean = true;
  productList: Product[] = [];
  messageCount: number = 3;
  boxCss: boolean = true;
  box2Css: boolean = true;
  box3Css: boolean = true;
  constructor() {
    this.productList.push(new Product(1, 'kalem1', 100));
    this.productList.push(new Product(2, 'kalem2', 200));
    this.productList.push(new Product(3, 'kalem3', 300));
  }

  toggle() {
    this.toggleShow = !this.toggleShow;
  }
  addProduct() {
    this.productList.push(new Product(4, 'kalem4', 400));
  }
  removeProduct(id: number) {
    this.productList = this.productList.filter((x) => x.id != id);
  }
  addClass() {
    this.boxCss = true;
    this.box2Css = true;
 
  }
}
