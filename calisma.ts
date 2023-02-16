class User {
  id: number;
  name: string;
  surname: string;
  age: number;
  constructor(id: number, name: string, surname: string, age: number) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}
class UserList implements IUserInterface {
  GetAllUser(): User[] {
    let userList: User[] = [];
    userList.push(new User(1, "nihan", "telli", 26));
    userList.push(new User(2, "filiz", "telli", 50));
    userList.push(new User(3, "ali", "telli", 50));
    return userList;
  }
}
class UserListWithSQL implements IUserInterface {
  GetAllUser(): User[] {
    let userList: User[] = [];
    userList.push(new User(1, "SQL-nihan", "telli", 26));
    userList.push(new User(2, "SQL-filiz", "telli", 50));
    userList.push(new User(3, "SQL-ali", "telli", 50));
    return userList;
  }
}
interface IUserInterface {
  GetAllUser(): User[];
}
class UserService {
  private _userRepository: IUserInterface;
  constructor(userRepository: IUserInterface) {
    this._userRepository = userRepository;
  }

  GetAllUser(): User[] {
    let newUserList: User[] = [];
    this._userRepository.GetAllUser().forEach((user) => {
      newUserList.push(new User(user.id, user.name, user.name, user.age));
    });
    return newUserList;
  }
}
class UserFactory {
  public CreateUserList(): IUserInterface {
    return new UserList();
  }

  public UserListWithSQL(): IUserInterface {
    return new UserList();
  }
}
var userService = new UserService(new UserFactory().CreateUserList());
userService.GetAllUser().forEach((x) => {
  console.log(`${x.id} ${x.name}${x.surname} ${x.age}`);
});
