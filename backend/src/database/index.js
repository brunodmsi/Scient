import Sequelize from 'sequelize';

import User from '../app/models/User';
import UserAddress from '../app/models/UserAddress';
import Question from '../app/models/Question';
import UserSurvey from '../app/models/UserSurvey';
import Bank from '../app/models/Bank';
import SurveyResult from '../app/models/SurveyResult';

import databaseConfig from '../config/database';

const models = [User, UserAddress, Question, UserSurvey, Bank, SurveyResult];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
