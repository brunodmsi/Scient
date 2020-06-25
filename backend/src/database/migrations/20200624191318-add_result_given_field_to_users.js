module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'result_given', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'result_given');
  },
};
