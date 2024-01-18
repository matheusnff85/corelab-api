import { RequestHandler } from 'express';
import TasksServices from '../services/TasksServices';
import StatusCodes from '../types/statusCodes';

export default class TasksController {
  constructor(private tasksServices: TasksServices = new TasksServices()) {}

  public findAllUserTasks: RequestHandler = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const result = await this.tasksServices.findAllUserTasks(Number(userId));
      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}
