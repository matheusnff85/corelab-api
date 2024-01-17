import { IUser } from '../interfaces/IUser';
import UserModel from '../models/UsersModel';

export default class UsersServices {
  constructor(private userModel: UserModel = new UserModel()) {}

  public async create(newUser: IUser): Promise<boolean> {
    const result = await this.userModel.create(newUser);
    return result;
  }
}
