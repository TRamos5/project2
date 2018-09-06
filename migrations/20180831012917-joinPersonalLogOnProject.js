'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.changeColumn(
        'personalLogs',
        'project_id',
         { 
           type: Sequelize.INTEGER,
           references: {
             model: 'projects',
             key: 'id'
           }
          });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.changeColumn(
        'personalLogs',
        'project_id',
        {type: Sequelize.INTEGER}
      )
    
  }
};