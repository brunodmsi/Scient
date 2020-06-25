import Sequelize, { Model } from 'sequelize';

class Bank extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        logo: Sequelize.STRING,
        unlimited_withdraws: Sequelize.BOOLEAN,
        free_ted: Sequelize.BOOLEAN,
        loan: Sequelize.BOOLEAN,
        university_account: Sequelize.BOOLEAN,
        deposit: Sequelize.BOOLEAN,
      },
      { sequelize }
    );

    return this;
  }
}

export default Bank;
