import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  constructor(private postService: PostService) {
    this.postService.getPost().subscribe((x) => {
      console.log(x);
    });
  }
}
