import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

class Routes {
  constructor() {
    this.routes = new Router();

    this.rootRoutes();
    this.sessionRoutes();
    this.usersRoutes();
  }

  rootRoutes() {
    this.routes.get('/', (req, res) => res.json({ message: 'Hello Word' }));
  }

  sessionRoutes() {
    this.routes.post('/sessions', SessionController.login);
  }

  usersRoutes() {
    this.routes.post('/users', UserController.create);
  }
}

export default new Routes().routes;
