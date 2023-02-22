import { Injectable } from '@angular/core';
import { User } from './models/user';
@Injectable({
  providedIn: 'root',
})
export class UserRepository {
  private userList: User[] = [];
  load() {
    this.userList.push(
      { id: 1, name: 'nihan', surname: 'telli', age: 25 },
      { id: 2, name: 'ayşe', surname: 'telli', age: 11 },
      { id: 3, name: 'fatma', surname: 'telli', age: 22 }
    );
  }
  constructor() {
    this.load();
  }
  getList(): ReadonlyArray<User> {
    return this.userList as ReadonlyArray<User>;
  }
  getById(id: number) {
    return this.userList.find((x) => x.id == id);
  }
  add(newUser: User) {
    this.userList.push(newUser);
  }
  delete(id: number) {
    this.userList = this.userList.filter((x) => x.id != id);
  }
}
