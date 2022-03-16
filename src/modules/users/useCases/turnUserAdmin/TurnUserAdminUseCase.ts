import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const haveID = this.usersRepository.findById(user_id);
    if (!haveID) {
      throw new Error("User not found");
    }
    const turnUserAdmin = this.usersRepository.turnAdmin(haveID);
    return turnUserAdmin;
  }
}

export { TurnUserAdminUseCase };
