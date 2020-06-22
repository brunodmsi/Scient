import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        options: Sequelize.ARRAY(Sequelize.JSON),
        enabled: Sequelize.BOOLEAN,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.UserSurvey, {
      foreignKey: 'question_id',
      as: 'question',
    });
  }
}

export default Question;
