'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('members', members);
    },
    
    async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('members', null, {});
    }
  };

  const members = [{
    name: 'Cecilia Mendez',
    image: "Cecilia Mendez.jpeg",
    createdAt: new Date()
    }, {
        name: 'Marco Fernandez',
        image: "Marco Fernandez.jpg",
        createdAt: new Date()
    } , {
        name: 'María Garcia',
        image: "María Garcia.jpg",
        createdAt: new Date()
    } , {
        name: 'María Irola',
        image: "María Irola.jpg",
        createdAt: new Date()
    } , {
        name: 'Marita Gomez',
        image: "Marita Gomez.jpg",
        createdAt: new Date()
    } , {
        name: 'Marita Gomez',
        image: "Marita Gomez.jpeg",
        createdAt: new Date()
    } , {
        name: 'Miriam Rodriguez',
        image: "Miriam Rodriguez.jpg",
        createdAt: new Date()
    } , {
        name: 'Rodrigo Fuente',
        image: "Rodrigo Fuente.jpg",
        createdAt: new Date()
    }
  ];
