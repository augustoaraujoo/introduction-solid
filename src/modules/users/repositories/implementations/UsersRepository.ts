import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    const userID = this.users.find((user) => user.id === id);
    return userID;
  }

  findByEmail(email: string): User | undefined {
    const existsUserEmail = this.users.find((user) => user.email === email);
    return existsUserEmail;
  }

  turnAdmin(receivedUser: User): User {
    const turnAdm = this.users.find((user) => user.id === receivedUser.id);
    turnAdm.admin = !turnAdm.admin;
    turnAdm.updated_at = new Date();
    return turnAdm;
  }

  list(): User[] {
    const list = this.users;
    return list;
  }
}

export { UsersRepository };
