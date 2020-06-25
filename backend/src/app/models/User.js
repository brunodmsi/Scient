import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        rg: Sequelize.STRING,
        cpf: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        survey_done: Sequelize.BOOLEAN,
        result_given: Sequelize.BOOLEAN,
      },
      { sequelize }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.hasOne(models.UserAddress, { foreignKey: 'user_id', as: 'address' });
    this.hasMany(models.UserSurvey, { foreignKey: 'user_id', as: 'survey' });
    this.hasOne(models.SurveyResult, {
      foreignKey: 'user_id',
      as: 'survey_results',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
