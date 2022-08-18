'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('categories', categories);
    },
    
    async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('categories', null, {});
    }
  };

  const categories = [{
    name: 'donaciones',
    description: 'nuevas donaciones',
    createdAt: new Date(),
  },
  {
    name: 'voluntariado',
    description: 'nuevos voluntariados',
    createdAt: new Date(),
  },
  {
    name: 'noticias',
    description: 'noticias',
    createdAt: new Date(),
  },
  {
    name: 'actividades',
    description: 'nuevas actividades',
    createdAt: new Date(),
  },];
