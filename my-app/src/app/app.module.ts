import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { ChildComponent } from './input-output/child/child.component';
import { ParentProductComponent } from './input-output-product/components/parent-product/parent-product.component';
import { ChildProductComponent } from './input-output-product/components/child-product/child-product.component';
import { ChildProductDetailComponent } from './input-output-product/components/child-product-detail/child-product-detail.component';
import { FakeProductAPIService } from './fake-product-api.service';
import { RealProductAPIService } from './real-product-api.service';
import { Helper } from './shared/helper';
import { environment } from '../environments/environment.prod';
const IS_PROD = true;

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentProductComponent,
    ChildProductComponent,
    ChildProductDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: RealProductAPIService,
      useClass: IS_PROD ? RealProductAPIService : FakeProductAPIService,
    },
    // {
    //   provide: RealProductAPIService,
    //   useFactory: () =>
    //     IS_PROD == true
    //       ? new RealProductAPIService()
    //       : new FakeProductAPIService(),
    // },
    // { provide: RealProductAPIService, useClass: RealProductAPIService },
    { provide: Helper, useClass: Helper },
    { provide: 'BASE_API_URL', useValue: environment.baseUrl },
    { provide: 'MENU_FEATURE', useValue: false },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
