import { Router } from 'express';
import TasksController from '../controllers/TasksController';

const tasksController = new TasksController();
const tasksRouter = Router();

tasksRouter.get('/tasks/:userId', tasksController.findAllUserTasks);

export default tasksRouter;
