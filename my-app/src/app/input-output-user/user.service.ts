import { Inject, Injectable } from '@angular/core';
import { User } from './models/user';
import { UserRepository } from './user-repository';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private userRepository: UserRepository,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {
    console.log(`baseUrl:${baseUrl}`);
  }
  getAll(): ReadonlyArray<User> {
    let userList: User[] = [];
    this.userRepository.getList().forEach((x) => {
      userList.push({ id: x.id, name: x.name, surname: x.surname, age: x.age });
    });
    return userList as ReadonlyArray<User>;
  }
  getById(id: number): User | undefined {
    return this.userRepository.getById(id);
  }
  add(user: User) {
    this.userRepository.add(user);
  }
  delete(id: number) {
    this.userRepository.delete(id);
  }
}
