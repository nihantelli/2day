import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryMenu } from '../category-menu';
import { Product } from '../product';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  newProduct: Product | undefined = undefined;
  productList: Product[] = [];
  public frm = this.formBuilder.group({
    name: [''],
    price: [''],
    category: [''],
    publish: [false],
  });
  constructor(private formBuilder: FormBuilder) {}
  save() {
    this.newProduct = this.frm.value as Product;
    this.productList.push(this.newProduct);
  }

  categoryMenuList: CategoryMenu[] = [
    { id: 1, text: 'kalemler' },
    { id: 2, text: 'defterler' },
    { id: 3, text: 'silgiler' },
  ];
}
