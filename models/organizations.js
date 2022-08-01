'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  Organization.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    welcomeText: DataTypes.STRING,
    Facebook: DataTypes.STRING,
    Linkedin: DataTypes.STRING,
    Instagram: DataTypes.STRING
    
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Organization'
  });
  return Organization;
};