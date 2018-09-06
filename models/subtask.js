'use strict';
module.exports = (sequelize, DataTypes) => {
  const subTask = sequelize.define('subTask', {
    subTaskIndex: DataTypes.STRING,
    description: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    task_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    owner: DataTypes.STRING,
    budget: DataTypes.INTEGER
  }, {});
  subTask.associate = function(models) {
    subTask.hasOne(models.task, {
      foreignKey: 'task_id'
    }),
    subTask.hasMany(models.user, {
      foreignKey: 'user_id'
    }),
    subTask.hasOne(models.project, {
      foreignKey: 'project_id'
    })

  };
  return subTask;
};