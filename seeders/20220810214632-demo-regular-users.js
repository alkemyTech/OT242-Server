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
    email: 'regulard@example.com',
    image: "srcOfRegular",
    password: "regulard",
    roleId: 3,
    createdAt: new Date,
    updatedAt: new Date
  },{
    firstName: 'Regular',
    lastName: '2',
    email: 'regulard@example.com',
    image: "srcOfRegular",
    password: "regulard",
    roleId: 3,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '3',
    email: 'regulard@example.com',
    image: "srcOfRegular",
    password: "regulard",
    roleId: 3,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '4',
    email: 'regulard@example.com',
    image: "srcOfRegular",
    password: "regulard",
    roleId: 3,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '5',
    email: 'regulard@example.com',
    image: "srcOfRegular",
    password: "regulard",
    roleId: 3,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '6',
    email: 'regulard@example.com',
    image: "srcOfRegular",
    password: "regulard",
    roleId: 3,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '7',
    email: 'regulard@example.com',
    image: "srcOfRegular",
    password: "regulard",
    roleId: 3,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '8',
    email: 'regulard@example.com',
    image: "srcOfRegular",
    password: "regulard",
    roleId: 3,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '9',
    email: 'regulard@example.com',
    image: "srcOfRegular",
    password: "regulard",
    roleId: 3,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    firstName: 'Regular',
    lastName: '10',
    email: 'regulard@example.com',
    image: "srcOfRegular",
    password: "regulard",
    roleId: 3,
    createdAt: new Date,
    updatedAt: new Date
  }];
