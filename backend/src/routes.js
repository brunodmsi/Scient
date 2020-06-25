import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import QuestionController from './app/controllers/QuestionController';
import UserSurveyController from './app/controllers/UserSurveyController';
import BankController from './app/controllers/BankController';
import SurveyResultController from './app/controllers/SurveyResultController';

import validateUserStore from './app/validators/UserStore';
import validateSessionStore from './app/validators/SessionStore';
import validateQuestionStore from './app/validators/QuestionStore';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/users', validateUserStore, UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/sessions', validateSessionStore, SessionController.store);

routes.get('/questions', QuestionController.index);
routes.post('/questions', validateQuestionStore, QuestionController.store);
routes.put('/questions/:id', QuestionController.update);
routes.delete('/questions/:id', QuestionController.destroy);

routes.get('/survey', authMiddleware, UserSurveyController.index);
routes.post('/survey', authMiddleware, UserSurveyController.store);

routes.get('/survey/result', authMiddleware, SurveyResultController.show);

routes.get('/banks', BankController.index);
routes.post('/banks', BankController.store);

// routes.get('/list/:id', ResultController.generate);

export default routes;
