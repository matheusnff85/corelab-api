import * as cors from 'cors';
import * as express from 'express';
import errorHandler from './middlewares/errorHandler';
import tasksRouter from './routes/tasks.routes';
import usersRouter from './routes/users.routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Rota de teste
    this.app.get('/teste', (_req, res) => res.json({ ok: true }));
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH'
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(accessControl);
    this.app.use(usersRouter);
    this.app.use(tasksRouter);
    this.app.use(errorHandler);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
  }
}

export default App;
