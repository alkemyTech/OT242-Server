'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('entries', news);
    },
    
    async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('entries', null, {});
    }
  };

  const news = [{
    name: 'Standard',
    content: 'HOLA SOY EL CONTENIDO DE ESTA NOVEDAD',
    image: "novedadImagen.jpg",
    categoryId: 2,
    type: "noticias",
    createdAt: new Date(),
  }, {
    name: 'Standard',
    content: 'HOLA SOY EL CONTENIDO DE ESTA NOVEDAD',
    image: "novedadImagen.jpg",
    categoryId: 1,
    type: "avisos",
    createdAt: new Date(),
  }, {
    name: 'Standard',
    content: 'HOLA SOY EL CONTENIDO DE ESTA NOVEDAD',
    image: "novedadImagen.jpg",
    categoryId: 2,
    type: "noticias",
    createdAt: new Date(),
  },{
    name: 'Standard',
    content: 'HOLA SOY EL CONTENIDO DE ESTA NOVEDAD',
    image: "novedadImagen.jpg",
    categoryId: 1,
    type: "avisos",
    createdAt: new Date(),
  }, {
    name: 'Standard',
    content: 'HOLA SOY EL CONTENIDO DE ESTA NOVEDAD',
    image: "novedadImagen.jpg",
    categoryId: 2,
    type: "noticias",
    createdAt: new Date(),
  }, {
    name: 'Standard',
    content: 'HOLA SOY EL CONTENIDO DE ESTA NOVEDAD',
    image: "novedadImagen.jpg",
    categoryId: 2,
    type: "noticias",
    createdAt: new Date(),
  }];
