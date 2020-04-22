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
}

export default Question;
