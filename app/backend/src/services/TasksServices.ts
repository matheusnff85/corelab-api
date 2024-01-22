import { ITask } from '../interfaces/ITask';
import TasksModel from '../models/TasksModel';

export default class TasksServices {
  constructor(private tasksModel: TasksModel = new TasksModel()) {}

  public async create(newTask: ITask): Promise<boolean> {
    const result = await this.tasksModel.create(newTask);
    return result;
  }

  public async findAllUserTasks(userId: string): Promise<ITask[] | null> {
    const result = this.tasksModel.findAllUserTasks(Number(userId));
    return result;
  }

  public async updateTitle(newTitle: string, taskId: string): Promise<string> {
    const result = await this.tasksModel.updateTitle(newTitle, Number(taskId));
    return result;
  }

  public async updateDescription(
    newDescription: string,
    taskId: string
  ): Promise<string> {
    const result = await this.tasksModel.updateDescription(
      newDescription,
      Number(taskId)
    );
    return result;
  }

  public async updateColor(newColor: string, taskId: string): Promise<string> {
    const result = await this.tasksModel.updateColor(newColor, Number(taskId));
    return result;
  }

  public async setFavorite(setFav: string, taskId: string): Promise<string> {
    const result = await this.tasksModel.setFavorite(
      setFav === 'true',
      Number(taskId)
    );
    return result;
  }

  public async updateTask(
    newValue: string,
    keyToUpdate: string,
    taskId: string
  ): Promise<string> {
    switch (keyToUpdate) {
      case 'title':
        return this.updateTitle(newValue, taskId);
      case 'description':
        return this.updateDescription(newValue, taskId);
      case 'color':
        return this.updateColor(newValue, taskId);
      case 'favorite':
        return this.setFavorite(newValue, taskId);
      default:
        throw new Error();
    }
  }

  public async delete(taskId: string): Promise<string> {
    const result = await this.tasksModel.delete(Number(taskId));
    return result;
  }
}
