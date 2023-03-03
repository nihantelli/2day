import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAdminComponent } from './admin/about-admin/about-admin.component';

import { ContactAdminComponent } from './admin/contact-admin/contact-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'admin-home', component: HomeAdminComponent },
      { path: 'admin-about', component: AboutAdminComponent },
      { path: 'admin-contact', component: ContactAdminComponent },
    ],
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
