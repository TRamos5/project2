'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'subTasks',
      'name',
      {
        type: Sequelize.STRING
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
              'subTasks', 'name');
  }
};
