require('dotenv').config()
 const options = {

    definition: {
      openapi: "3.0.0",
      info: {
        title: "Ong API",
        version: "1.0.0",
        description: "Ong API",
      },
      servers: [
        {
          url: "http://localhost:3000/docs",
        },
      ],
    },
    apis: ['./routes/*.js'],
  };
  module.exports = options;