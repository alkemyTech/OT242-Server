'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  Entry.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Entry'
  });
  return Entry;
};