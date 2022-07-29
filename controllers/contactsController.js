const { Categories } = require('../models');

const insertContact = (req, res, next) => {
  
  const { name, email } = req.body;

  try {
    const contact = Contact.create({
      name,
      email,
      type:'contact',
      createdAt: new Date
    });
                
    return res.status(202).json({ message: 'Datos de contacto almacenados exitosamente!'});     
  }

  catch (error) {
    return res.status(400).json(error);

  };
};

module.exports = { insertContact }
