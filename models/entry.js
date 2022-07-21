'use strict';
const {  Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    
    static associate(models) {
     
    }
  };
  Entry.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId: DataTypes.NUMBER,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entry'
  });
  return Entry;
};
