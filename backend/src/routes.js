import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import QuestionController from './app/controllers/QuestionController';
import UserSurveyController from './app/controllers/UserSurveyController';

import validateUserStore from './app/validators/UserStore';
import validateSessionStore from './app/validators/SessionStore';
import validateQuestionStore from './app/validators/QuestionStore';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/users', validateUserStore, UserController.store);
routes.post('/sessions', validateSessionStore, SessionController.store);

routes.get('/questions', QuestionController.index);
routes.post('/questions', validateQuestionStore, QuestionController.store);

routes.get('/survey', UserSurveyController.index);
routes.post('/survey', UserSurveyController.store);

routes.get('/', authMiddleware, (req, res) => res.json({ message: 'oi' }));

export default routes;
