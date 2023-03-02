import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, RouterModule, Routes, UrlSegment } from '@angular/router';
import { NewOrderComponent } from './new-order/new-order.component';

const router: Routes = [{ path: 'new-order', component: NewOrderComponent }];

@NgModule({
  declarations: [NewOrderComponent],
  imports: [CommonModule, RouterModule.forChild(router)],
})
export class OrderModule {}
