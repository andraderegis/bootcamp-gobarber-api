import { Router } from 'express';

import UserController from './app/controllers/UserController';

class Routes {
  constructor() {
    this.routes = new Router();

    this.rootRoutes();
    this.usersRoutes();
  }

  rootRoutes() {
    this.routes.get('/', (req, res) => res.json({ message: 'Hello Word' }));
  }

  usersRoutes() {
    this.routes.post('/users', UserController.store);
  }
}

export default new Routes().routes;
