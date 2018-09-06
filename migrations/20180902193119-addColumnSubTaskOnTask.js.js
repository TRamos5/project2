'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tasks',
      'user_id',
      {
        type: Sequelize.INTEGER
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
              'tasks', 'user_id');
  }
};
