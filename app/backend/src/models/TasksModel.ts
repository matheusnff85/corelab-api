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

  public async updateTitle(newTitle: string, taskId: number): Promise<string> {
    await this._tasksModel.update(
      { title: newTitle },
      { where: { id: taskId } }
    );
    return 'Title Updated';
  }

  public async updateDescription(
    newDescription: string,
    taskId: number
  ): Promise<string> {
    await this._tasksModel.update(
      { description: newDescription },
      { where: { id: taskId } }
    );
    return 'Description Updated';
  }

  public async updateColor(newColor: string, taskId: number): Promise<string> {
    await this._tasksModel.update(
      { color: newColor },
      { where: { id: taskId } }
    );
    return 'Color Updated';
  }

  public async setFavorite(setFav: boolean, taskId: number): Promise<string> {
    await this._tasksModel.update(
      { isFavorite: setFav },
      { where: { id: taskId } }
    );
    return setFav ? 'Task Favorited!' : 'Task Unfavorited';
  }

  public async delete(taskId: number): Promise<string> {
    await this._tasksModel.destroy({ where: { id: taskId } });
    return 'Task Deleted';
  }
}
