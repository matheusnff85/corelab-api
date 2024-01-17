import { RequestHandler } from 'express';
import UserService from '../services/UsersServices';
import StatusCodes from '../types/statusCodes';

export default class UsersController {
  constructor(private userService: UserService = new UserService()) {}

  public create: RequestHandler = async (req, res, next) => {
    try {
      const newUser = req.body;
      const result = await this.userService.create(newUser);
      res.status(StatusCodes.CREATED).json({ created: result });
    } catch (error) {
      next(error);
    }
  };
}
