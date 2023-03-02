import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, Routes, UrlSegment } from '@angular/router';
import { NewOrderComponent } from './new-order/new-order.component';

const router: Routes = [{ path: 'new-order', component: NewOrderComponent }];

@NgModule({
  declarations: [NewOrderComponent],
  imports: [CommonModule],
})
export class OrderModule {}
