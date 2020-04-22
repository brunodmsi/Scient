module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      enabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      options: {
        type: Sequelize.ARRAY(Sequelize.JSON),
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
    return queryInterface.dropTable('questions');
  },
};
