'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'subTasks',
      'budget',
      {
        type: Sequelize.INTEGER
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
              'subTasks', 'budget');
  }
};
