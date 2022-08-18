'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('testimonials', testimonials);
    },
    
    async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('testimonials', null, {});
    }
  };

  const testimonials = [{
    name: 'Cecilia Mendez',
    image: "Cecilia Mendez.jpeg",
    content: "Hola soy el contenido de este testimonio. Hola soy el contenido de este testimonio.",
    createdAt: new Date()
    }, {
        name: 'Marco Fernandez',
        image: "Marco Fernandez.jpg",
        content: "Hola soy el contenido de este testimonio. Hola soy el contenido de este testimonio.",
        createdAt: new Date()
    } , {
        name: 'María Garcia',
        image: "María Garcia.jpg",
        content: "Hola soy el contenido de este testimonio. Hola soy el contenido de este testimonio.",
        createdAt: new Date()
    } , {
        name: 'María Irola',
        image: "María Irola.jpg",
        content: "Hola soy el contenido de este testimonio. Hola soy el contenido de este testimonio.",
        createdAt: new Date()
    } , {
        name: 'Marita Gomez',
        image: "Marita Gomez.jpeg",
        content: "Hola soy el contenido de este testimonio. Hola soy el contenido de este testimonio.",
        createdAt: new Date()
    } , {
        name: 'Miriam Rodriguez',
        image: "Miriam Rodriguez.jpg",
        content: "Hola soy el contenido de este testimonio. Hola soy el contenido de este testimonio.",
        createdAt: new Date()
    } , {
        name: 'Rodrigo Fuente',
        image: "Rodrigo Fuente.jpg",
        content: "Hola soy el contenido de este testimonio. Hola soy el contenido de este testimonio.",
        createdAt: new Date()
    }
  ];
