import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from './Post';
import { switchMap, from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}
  getPost() {
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
  getPostById(id: number) {
    let params = new HttpParams().set('userId', id);
    return this.httpClient.get<ReadonlyArray<Post>>(
      'https://jsonplaceholder.typicode.com/posts',
      { params: params }
    );
  }
}
