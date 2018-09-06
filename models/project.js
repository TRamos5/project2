'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    projectName: DataTypes.STRING,
    teamLead: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    budget: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  project.associate = function(models) {
    project.hasMany(models.user, {
      foreignKey: 'user_id'
    });

    // project.hasOne(models.budget, {
    //   foreignKey: 'budget_id'
    // })
  };
  return project;
};