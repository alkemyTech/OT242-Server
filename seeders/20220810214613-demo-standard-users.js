'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users', users);
    },
    
    async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };

  const users = [{
    firstName: 'Standard',
    lastName: '1',
    email: 'standard@example.com',
    image: "srcOfStandard",
    password: "standard",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  },{
    firstName: 'Standard',
    lastName: '2',
    email: 'standard@example.com',
    image: "srcOfStandard",
    password: "standard",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Standard',
    lastName: '3',
    email: 'standard@example.com',
    image: "srcOfStandard",
    password: "standard",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Standard',
    lastName: '4',
    email: 'standard@example.com',
    image: "srcOfStandard",
    password: "standard",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Standard',
    lastName: '5',
    email: 'standard@example.com',
    image: "srcOfStandard",
    password: "standard",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Standard',
    lastName: '6',
    email: 'standard@example.com',
    image: "srcOfStandard",
    password: "standard",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Standard',
    lastName: '7',
    email: 'standard@example.com',
    image: "srcOfStandard",
    password: "standard",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Standard',
    lastName: '8',
    email: 'standard@example.com',
    image: "srcOfStandard",
    password: "standard",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Standard',
    lastName: '9',
    email: 'standard@example.com',
    image: "srcOfStandard",
    password: "standard",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Standard',
    lastName: '10',
    email: 'standard@example.com',
    image: "srcOfStandard",
    password: "standard",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }];