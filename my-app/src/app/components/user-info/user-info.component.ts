import { Component, Input } from '@angular/core';
import { Post } from 'src/app/Post';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  @Input() post:ReadonlyArray<Post> =[]
}
