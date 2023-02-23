import { Component } from '@angular/core';
import { User } from 'src/app/input-output-user/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-parent-user',
  templateUrl: './parent-user.component.html',
  styleUrls: ['./parent-user.component.css'],
})
export class ParentUserComponent {
  userList: ReadonlyArray<User>;
  selectedUser: User | undefined;
  constructor(private userService: UserService) {
    this.userList = this.userService.getAll();
  }
  get toggleUserDetail() {
    return this.selectedUser != undefined;
  }
  userDetail(userId: number) {
    this.selectedUser = this.userService.getById(userId);
  }
  close() {
    this.selectedUser = undefined;
  }
}
