'use strict';
module.exports = (sequelize, DataTypes) => {
  const personalLog = sequelize.define('personalLog', {
    user_id: DataTypes.INTEGER,
    task: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    project_id: DataTypes.INTEGER
  }, {});
  personalLog.associate = function(models) {
    personalLog.hasOne(models.user, {
      foreignKey: 'user_id'
    }),
    personalLog.hasOne(models.project, {
      foreignKey: 'project_id'
    })
  };
  return personalLog;
};