import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildUserComponent } from './input-output-user/child-user/child-user.component';
import { ChildUserDetailComponent } from './input-output-user/child-user-detail/child-user-detail.component';
import { Helper } from './shared/helper';
import { environment } from './environment/environment';
import { ParentUserComponent } from './input-output-user/parent-user/parent-user.component';
const IS_OKAY = true;
@NgModule({
  declarations: [AppComponent, ChildUserComponent, ChildUserDetailComponent, ParentUserComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
   
    { provide: Helper, useClass: Helper },
    { provide: 'BASE_API_URL', useValue: environment.baseUrl },
    { provide: 'MENU_FEATURE', useValue: false },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
