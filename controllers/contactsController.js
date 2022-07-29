const {contacts} = require('../models');


const getContacts = async (req, res) => {
        try {
       
            let contactsList = await contacts.findAll();
                     
            return res.status(202).json(contactsList);
            
        }
    
        catch (error) {
            return res.status(400).json(error);
    
        };
  };

  module.exports = { getContacts }
