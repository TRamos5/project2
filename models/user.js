'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
    project_id: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    user.hasMany(models.project, {
      foreignKey: 'project_id'
    });
  };
  return user;
};