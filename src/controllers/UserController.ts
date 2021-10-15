import { Request, Response } from "express";
import { User } from "../entities/User";
import { UserValidation } from "../entities/validations/UserValidation";
import { UsersService } from "../services/UsersService";

export class UserController {
  async create(httpRequest: Request, httpResponse: Response) {
    try {
      const userValidation = new UserValidation(httpRequest.body)
      userValidation.validate();

      const { name, email } = httpRequest.body;

      const usersService = new UsersService();
      const userSearched = await usersService.findByEmail(email);

      if(!userSearched) {
        const user = new User();
        user.name = name;
        user.email = email;

        const userSaved = await usersService.create(user);
        httpResponse.status(201).json({ data: userSaved});
      } else {
        httpResponse.json({ data: userSearched});
      }

    } catch (e) {
      httpResponse.json({error: `${e}`});
    }
  }
}