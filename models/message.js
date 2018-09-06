'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    text: DataTypes.TEXT,
    project_id: DataTypes.INTEGER
  }, {});
  message.associate = function(models) {
    message.hasOne(models.project, {
      foreignKey: 'project_id'
    });
  };
  return message;
};