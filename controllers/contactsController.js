const { Contacts } = require('../models');



const getContacts = async (req, res, next) => {
  let query = await Contacts.findAll();

  return res.status(200).json(query);
};


const insertContact = (req, res, next) => {
  
  const { name, phone, email, message } = req.body;

  try {
    const contact = Contacts.create({
      name,
      phone,
      email,
      message,
      type:'contact',
      deletedAt: new Date
    });
                
    return res.status(202).json({ message: 'Datos de contacto almacenados exitosamente!'});     
  }

  catch (error) {
    return res.status(400).json(error);

  };
};

module.exports = { getContacts, insertContact }
