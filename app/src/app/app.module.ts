import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { PostCreateComponent } from './pages/post/post-create/post-create.component';
import { PostUpdateComponent } from './pages/post/post-update/post-update.component';
import { HomeComponent } from './pages/common/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCreateComponent,
    PostUpdateComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
