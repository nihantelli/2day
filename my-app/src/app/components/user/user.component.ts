import { Component } from '@angular/core';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  loading: boolean = false;
  post: ReadonlyArray<Post> = [];
  constructor(private postService: PostService) {
    this.postService.getPost().subscribe((x) => (this.post = x));
  }
  search(text: any) {
    this.loading = true;
    // this.postService.getPostById(search).subscribe((x) => {
    //   this.post = x;
    //   this.loading = false;
    // });
    this.postService.getPostByTitle(text).subscribe((x) => {
      this.post = x;
      this.loading = false;
    });
  }
}
