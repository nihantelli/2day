import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post?: Post;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.postService.getById(id).subscribe((x) => {
      this.post = x;
    });
    this.activatedRoute.params.subscribe((param: any) => {
      this.postService.getById(param.id).subscribe((x) => {
        this.post = x;
      });
    });
  }
}
