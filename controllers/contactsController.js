const { Contacts } = require('../models');
const sendEmail = require('../services/sendEmailNotification');



const getContacts = async (req, res, next) => {
  let contactsList = await Contacts.findAll();

  return res.status(202).json(contactsList);
};


const insertContact = async (req, res, next) => {
  
  const { name, phone, email, message } = req.body;
  
  try {
    const contact = Contacts.create({
        name,
        phone,
        email,
        message,
        deletedAt: new Date
      });
      
    await sendEmail(email)
                
    return res.status(202).json({ message: 'Datos de contacto almacenados exitosamente!'});     
  }

  catch (error) {
    return res.status(400).json(error);

  };
};

module.exports = { getContacts, insertContact }
