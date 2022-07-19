'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Slides', { 
      id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      imageUrl: {
        type:Sequelize.STRING
       },
      text:{
        type:Sequelize.STRING
       },
      order: {
        type:Sequelize.INTEGER
       },
      organizationId: {
        type:Sequelize.INTEGER
       }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Slides');
  }
};