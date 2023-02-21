import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ImagesComponent } from './pages/images/images.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ImagesComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AdminModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
