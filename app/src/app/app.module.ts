import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PublisherComponent } from './components/publisher/publisher.component';
import { Subscriber1Component } from './components/subscriber1/subscriber1.component';
import { Subscriber2Component } from './components/subscriber2/subscriber2.component';

@NgModule({
  declarations: [
    AppComponent,

    PublisherComponent,
    Subscriber1Component,
    Subscriber2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
