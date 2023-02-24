import { Component } from '@angular/core';
import { Post } from 'src/app/Post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  post: ReadonlyArray<Post> = [];
  constructor(private postService: PostService) {
    this.postService.getPost().subscribe((x) => (this.post = x));
  }
  search(search: number) {
    this.postService.getPostById(search).subscribe((x) => (this.post = x));
  }
}
