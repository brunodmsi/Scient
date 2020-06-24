import Sequelize, { Model } from 'sequelize';

class Bank extends Model {
  static init(sequelize) {
    super.init(
      {
        unlimited_withdraws: Sequelize.BOOLEAN,
        free_ted: Sequelize.BOOLEAN,
        longway_money: Sequelize.BOOLEAN,
        annuity: Sequelize.BOOLEAN,
        descounts: Sequelize.BOOLEAN,
        deposit: Sequelize.BOOLEAN,
      },
      { sequelize }
    );

    return this;
  }
}

export default Bank;
