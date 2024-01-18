import Tasks from '../database/models/tasks';
import { ITask } from '../interfaces/ITask';

export default class TasksModel {
  private _tasksModel = Tasks;

  public async create(newTask: ITask): Promise<boolean> {
    const result = await this._tasksModel.create(newTask);
    if (result) return true;
    return false;
  }

  public async findAllUserTasks(userId: number): Promise<ITask[] | null> {
    const result = await this._tasksModel.findAll({ where: { userId } });
    return result;
  }
}
