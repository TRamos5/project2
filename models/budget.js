'use strict';
module.exports = (sequelize, DataTypes) => {
  const budget = sequelize.define('budget', {
    projectName: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    budget: DataTypes.INTEGER,
    expenseLog: DataTypes.STRING,
    project_id: DataTypes.INTEGER
  }, {});
  budget.associate = function(models) {
    budget.hasOne(models.project, {
      foreignKey: 'project_id'
    })
  };
  return budget;
};