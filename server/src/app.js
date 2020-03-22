import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import Youch from 'youch';

import 'express-async-errors';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.isDev = process.env.NODE_ENV !== 'production';

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (this.isDev) {
        const youch = await new Youch(err, req);

        return res.status(500).json(await youch.toJSON());
      }

      return res
        .status(err.status || 500)
        .json({ message: 'Internal Server Error' });
    });
  }
}

export default new App().server;
