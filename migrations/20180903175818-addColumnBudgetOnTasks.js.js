'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tasks',
      'budget',
      {
        type: Sequelize.INTEGER
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
              'tasks', 'budget');
  }
};

