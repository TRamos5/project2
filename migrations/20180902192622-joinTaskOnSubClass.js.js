'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.changeColumn(
        'subTasks',
        'task_id',
         { 
           type: Sequelize.INTEGER,
           references: {
             model: 'tasks',
             key: 'id'
           }
          });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.changeColumn(
        'subTasks',
        'task_id',
        {type: Sequelize.INTEGER}
      )
    
  }
};