import { ITask } from '../interfaces/ITask';
import TasksModel from '../models/TasksModel';

export default class TasksServices {
  constructor(private tasksModel: TasksModel = new TasksModel()) {}

  public async findAllUserTasks(userId: number): Promise<ITask[] | null> {
    const result = this.tasksModel.findAllUserTasks(userId);
    return result;
  }
}
