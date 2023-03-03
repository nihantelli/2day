import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderChild1Component } from './order-child1/order-child1.component';
import { OrderChild2Component } from './order-child2/order-child2.component';
import { RouterModule, Routes } from '@angular/router';

const router: Routes = [
  { path: '', component: OrderChild1Component },
  { path: 'order-1', component: OrderChild1Component },
  { path: 'order-2', component: OrderChild2Component },
];

@NgModule({
  declarations: [OrderChild1Component, OrderChild2Component],
  imports: [CommonModule, RouterModule.forChild(router)],
})
export class OrderModule {}
