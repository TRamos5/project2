'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tasks',
      'owner',
      {
        type: Sequelize.STRING
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
              'tasks', 'owner');
  }
};
