import { Component } from '@angular/core';
import { User } from 'src/app/input-output-user/models/user';
import { UserService } from '../user.service';
import { RealUserAPIServiceService } from 'src/app/real-user-apiservice.service';
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
  userDetail(userId: number) {
    this.selectedUser = this.userService.getById(userId);
  }
}
