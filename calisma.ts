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
class UserList implements IUserRepository {
  GetAllPerson(): User[] {
    let userList: User[] = [];
    userList.push(new User(1, "nihan", "telli", 26));
    userList.push(new User(2, "filiz", "telli", 50));
    userList.push(new User(3, "ali", "telli", 50));
    return userList;
  }
}
class UserListRepositoryWithSQL implements IUserRepository {
  GetAllPerson(): User[] {
    // sql server
    let userList: User[] = [];
    userList.push(new User(1, "SQL-nihan", "telli", 26));
    userList.push(new User(2, "SQL-filiz", "telli", 50));
    userList.push(new User(3, "SQL-ali", "telli", 50));
    return userList;
  }
}
interface IUserRepository {
  GetAllPerson(): User[];
}
class UserService {
  private _userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  GetAllPerson(): User[] {
    let newUserList: User[] = [];
    this._userRepository.GetAllPerson().forEach((user) => {
      newUserList.push(new User(user.id, user.name, user.name, user.age));
    });
    return newUserList;
  }
}
class UserFactory {
  public CreateUserList(): IUserRepository {
    return new UserList();
  }

  public UserListRepositoryWithSQL(): IUserRepository {
    return new UserList();
  }
}
var userService = new UserService(new UserFactory().CreateUserList());
userService.GetAllPerson().forEach((x) => {
  console.log(`${x.id} ${x.name}${x.surname} ${x.age}`);
});
