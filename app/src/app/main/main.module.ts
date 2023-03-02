import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AboutComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
