import Sequelize, { Model } from 'sequelize';

class SurveyResult extends Model {
  static init(sequelize) {
    super.init(
      {
        recommended_banks: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default SurveyResult;
