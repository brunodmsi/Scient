import Sequelize, { Model } from 'sequelize';

class UserSurvey extends Model {
  static init(sequelize) {
    super.init(
      {
        answer_index: Sequelize.INTEGER,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Question, {
      foreignKey: 'question_id',
      as: 'question',
    });
  }
}

export default UserSurvey;
