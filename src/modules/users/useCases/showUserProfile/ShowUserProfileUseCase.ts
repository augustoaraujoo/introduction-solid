import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = new User();
    if (!user.id) {
      throw new Error("error");
    }
    if (!user.admin) {
      throw new Error("error");
    }
    this.usersRepository.findById(user_id);
    this.usersRepository.list();
    return user;
  }
}

export { ShowUserProfileUseCase };
