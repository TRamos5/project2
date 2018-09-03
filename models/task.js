'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    project_id: DataTypes.INTEGER,
    mainTask: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  task.associate = function(models) {
    task.hasOne(models.project, {
      foreignKey: 'project_id'
    }),
    task.hasMany(models.user, {
      foreignKey: 'user_id'
    })
  };
  return task;
};