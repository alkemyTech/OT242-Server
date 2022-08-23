"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("members", members);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("members", null, {});
  },
};

const members = [
  {
    name: "Marita Gomez",
    image: "Marita Gomez.jpeg",
    role: "Fundadora",
    content:
      "Fundadora Marita estudió la carrera de nutrición y se especializó en nutrición infantil. Toda la vida fue voluntaria en distintos espacios en el barrio hasta que decidió abrir un comedor propio. Comenzó trabajando con 5 familias y culminó su trabajo transformando Somos Más en la organización que es hoy.",
    createdAt: new Date(),
  },
  {
    name: "María Irola",
    image: "María Irola.jpg",
    role: "Presidenta",
    content:
      "Presidenta María estudió economía y se especializó en economía para el desarrollo. Comenzó como voluntaria en la fundación y fue quien promovió el crecimiento y la organización de la institución acompañando la transformación de un simple comedor barrial al centro comunitario de atención integral que es hoy en día",
    createdAt: new Date(),
  },
  {
    name: "Cecilia Mendez",
    image: "Cecilia Mendez.jpeg",
    role: "Psicopedagoga",
    content:
      " Cecilia estudió la carrera de Psicopedagogia. Toda la vida fue voluntaria en distintos espacios en el barrio hasta que decidió abrir un comedor propio. Comenzó trabajando con 5 familias y culminó su trabajo transformando Somos Más en la organización que es hoy.",
    createdAt: new Date(),
  },
  {
    name: "Marco Fernandez",
    image: "Marco Fernandez.jpg",
    role: "Prof. de Educacion Física",
    content:
      "Toda la vida fue voluntario en distintos espacios en el barrio hasta que decidió abrir un comedor propio. Comenzó trabajando con 5 familias y culminó su trabajo transformando Somos Más en la organización que es hoy.",
    createdAt: new Date(),
  },
  {
    name: "María Garcia",
    image: "María Garcia.jpg",
    role: "Prof. de Artes Dramáticas",
    content:
      "Toda la vida fue voluntaria en distintos espacios en el barrio hasta que decidió abrir un comedor propio. Comenzó trabajando con 5 familias y culminó su trabajo transformando Somos Más en la organización que es hoy.",
    createdAt: new Date(),
  },
  {
    name: "Miriam Rodriguez",
    image: "Miriam Rodriguez.jpg",
    role: "Terapista Ocupacional",
    content:
      "Toda la vida fue voluntaria en distintos espacios en el barrio hasta que decidió abrir un comedor propio. Comenzó trabajando con 5 familias y culminó su trabajo transformando Somos Más en la organización que es hoy.",
    createdAt: new Date(),
  },
  {
    name: "Rodrigo Fuente",
    image: "Rodrigo Fuente.jpg",
    role: "Contador",
    content:
      "Toda la vida fue voluntario en distintos espacios en el barrio hasta que decidió abrir un comedor propio. Comenzó trabajando con 5 familias y culminó su trabajo transformando Somos Más en la organización que es hoy.",
    createdAt: new Date(),
  },
];
