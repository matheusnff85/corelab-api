import Users from '../database/models/users';
import { IUser } from '../interfaces/IUser';

export default class UsersModel {
  private _userModel = Users;

  public async create(newUser: IUser): Promise<boolean> {
    const result = await this._userModel.create(newUser);
    if (result) return true;
    return false;
  }
}
