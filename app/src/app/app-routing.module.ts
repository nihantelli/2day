import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import {  canActivateNewFormat } from './auth.guard';
import { CanOrderLoad } from './canorder';
import { ChildGuard } from './child.guard';
import { EditGuardNewType } from './edit.guard';
import { AboutComponent } from './main/about/about.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'admin',
    canActivate: [canActivateNewFormat],
    canActivateChild: [ChildGuard],
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'home', component: AdminHomeComponent },
      {
        path: 'user-list',
        component: UserListComponent,
        canDeactivate: [EditGuardNewType],
      },
    ],
  },
  {
    path: 'lazy-order',
    canLoad: [CanOrderLoad],
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
