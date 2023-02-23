import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/input-output-user/models/user';
@Component({
  selector: 'app-child-user',
  templateUrl: './child-user.component.html',
  styleUrls: ['./child-user.component.css'],
})
export class ChildUserComponent {
  @Input() selectedId: number | undefined;

  @Input() userList: ReadonlyArray<User> | undefined;
  @Output() detailShow= new EventEmitter<number>();

  userDetail(id: number) {
    this.selectedId = id;
    this.detailShow.emit(this.selectedId);
  }
  highlightRow(userId: number) {
    return this.selectedId == userId;
  }
  
}
