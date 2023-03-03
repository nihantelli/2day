import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AppRoutingModule } from '../app-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MainLayoutComponent,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MainLayoutComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
})
export class MainModule {}
