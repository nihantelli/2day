import { Component } from '@angular/core';
import { UserStateService } from 'src/app/user-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userState: UserStateService) {}
  login() {
    this.userState.currentUser = {
      id: 1,
      name: 'ahmet',
      email: 'ahmet@outlook.com',
    };
  }
  change() {
    this.userState.currentUser!.email = 'mehmet@outlook.com';
  }
}
