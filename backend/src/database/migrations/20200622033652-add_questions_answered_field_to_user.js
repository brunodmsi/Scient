module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'survey_done', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'survey_done');
  },
};
