module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('banks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      logo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      unlimited_withdraws: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      free_ted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      loan: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      university_account: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      deposit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('banks');
  },
};
