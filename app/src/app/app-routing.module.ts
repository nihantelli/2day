import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/common/home/home.component';
import { PostUpdateComponent } from './pages/post/post-update/post-update.component';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { PostCreateComponent } from './pages/post/post-create/post-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'post-list',
    component: PostListComponent,
  },
  {
    path: 'post-update',
    component: PostUpdateComponent,
  },
  {
    path: 'post-create',
    component: PostCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
