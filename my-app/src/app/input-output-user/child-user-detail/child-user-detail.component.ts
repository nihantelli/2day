import { Component, Input } from '@angular/core';
import { User } from 'src/app/input-output-user/models/user';
@Component({
  selector: 'app-child-user-detail',
  templateUrl: './child-user-detail.component.html',
  styleUrls: ['./child-user-detail.component.css'],
})
export class ChildUserDetailComponent {
  @Input() selectedUser: User | undefined;
}
