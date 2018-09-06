'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'projects',
      'budget',
      {
        type: Sequelize.INTEGER
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
              'projects', 'budget');
  }
};

