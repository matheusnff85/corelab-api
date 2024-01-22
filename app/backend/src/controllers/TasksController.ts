import { RequestHandler } from 'express';
import TasksServices from '../services/TasksServices';
import StatusCodes from '../types/statusCodes';

export default class TasksController {
  constructor(private tasksServices: TasksServices = new TasksServices()) {}

  public create: RequestHandler = async (req, res, next) => {
    try {
      const newTask = req.body;
      const result = await this.tasksServices.create(newTask);
      return res.status(StatusCodes.CREATED).json({ created: result });
    } catch (error) {
      next(error);
    }
  };

  public findAllUserTasks: RequestHandler = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const result = await this.tasksServices.findAllUserTasks(userId);
      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      next(error);
    }
  };

  public updateTask: RequestHandler = async (req, res, next) => {
    try {
      const { newValue, keyToUpdate } = req.body;
      const { taskId } = req.params;
      const result = await this.tasksServices.updateTask(
        newValue,
        keyToUpdate,
        taskId
      );
      return res.status(StatusCodes.OK).json({ message: result });
    } catch (error) {
      next(error);
    }
  };

  public delete: RequestHandler = async (req, res, next) => {
    try {
      const { taskId } = req.params;
      const result = await this.tasksServices.delete(taskId);
      return res.status(StatusCodes.SUCCESS_NO_RESPONSE).json(result);
    } catch (error) {
      next(next);
    }
  };
}
