import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      this.showUserProfileUseCase.execute({ user_id });
      console.log(this.showUserProfileUseCase);
      return response.status(200).json(this.showUserProfileUseCase);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}

export { ShowUserProfileController };
