import Sequelize, { Model } from 'sequelize';

class UserAddress extends Model {
  static init(sequelize) {
    super.init(
      {
        street: Sequelize.STRING,
        state: Sequelize.STRING,
        compliment: Sequelize.STRING,
        number: Sequelize.STRING,
        cep: Sequelize.STRING,
        city: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default UserAddress;
