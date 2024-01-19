import { Router } from 'express';
import TasksController from '../controllers/TasksController';

const tasksController = new TasksController();
const tasksRouter = Router();

tasksRouter.get('/tasks/:userId', tasksController.findAllUserTasks);
tasksRouter.post('/tasks/create', tasksController.create);
tasksRouter.put('/tasks/update/:taskId', tasksController.updateTask);
tasksRouter.delete('/tasks/delete/:taskId', tasksController.delete);

export default tasksRouter;
