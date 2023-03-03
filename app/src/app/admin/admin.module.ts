import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AboutAdminComponent } from './about-admin/about-admin.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';

import { AppRoutingModule } from '../app-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    HomeAdminComponent,
    AboutAdminComponent,
    ContactAdminComponent,
    AdminLayoutComponent,
  ],
  exports: [
    HomeAdminComponent,
    AboutAdminComponent,
    ContactAdminComponent,
    AdminLayoutComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
})
export class AdminModule {}
