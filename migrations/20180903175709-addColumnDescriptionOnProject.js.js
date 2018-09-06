'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'projects',
      'description',
      {
        type: Sequelize.TEXT
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
              'projects', 'description');
  }
};
