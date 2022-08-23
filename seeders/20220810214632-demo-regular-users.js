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
    firstName: 'Regular',
    lastName: '1',
    email: 'regular@example.com',
    image: "srcOfRegular",
    password: "regular",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  },{
    firstName: 'Regular',
    lastName: '2',
    email: 'regular@example.com',
    image: "srcOfRegular",
    password: "regular",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '3',
    email: 'regular@example.com',
    image: "srcOfRegular",
    password: "regular",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '4',
    email: 'regular@example.com',
    image: "srcOfRegular",
    password: "regular",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '5',
    email: 'regular@example.com',
    image: "srcOfRegular",
    password: "regular",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '6',
    email: 'regular@example.com',
    image: "srcOfRegular",
    password: "regular",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '7',
    email: 'regular@example.com',
    image: "srcOfRegular",
    password: "regular",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '8',
    email: 'regular@example.com',
    image: "srcOfRegular",
    password: "regular",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '9',
    email: 'regular@example.com',
    image: "srcOfRegular",
    password: "regular",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '10',
    email: 'regular@example.com',
    image: "srcOfRegular",
    password: "regular",
    roleId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }];