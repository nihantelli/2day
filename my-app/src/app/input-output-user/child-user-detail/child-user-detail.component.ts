import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/input-output-user/models/user';
@Component({
  selector: 'app-child-user-detail',
  templateUrl: './child-user-detail.component.html',
  styleUrls: ['./child-user-detail.component.css'],
})
export class ChildUserDetailComponent {
  @Input() selectedUser: User | undefined;
  @Output() closeEventClick = new EventEmitter();
  close() {
    this.closeEventClick.emit();
  }
}
