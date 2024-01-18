import { RequestHandler } from 'express';
import UserService from '../services/UsersServices';
import StatusCodes from '../types/statusCodes';

export default class UsersController {
  constructor(private userService: UserService = new UserService()) {}

  public create: RequestHandler = async (req, res, next) => {
    try {
      const newUser = req.body;
      const result = await this.userService.create(newUser);
      return res.status(StatusCodes.CREATED).json({ created: result });
    } catch (error) {
      next(error);
    }
  };

  public login: RequestHandler = async (req, res, next) => {
    try {
      const loginObj = req.body;
      const result = await this.userService.login(loginObj);
      if (result) {
        return res.status(StatusCodes.OK).json(result);
      }
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Password incorrect' });
    } catch (error) {
      next(error);
    }
  };
}
