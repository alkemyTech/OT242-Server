const {Role} = require('../models');

const rolesList = async (req, res) => {
    try {
        const roles = await Role.findAll();
        
        return res.status(200).json(roles);
        
    } catch (error) {
  
        return res.status(400).json(error);
        
    }
};

module.exports = {rolesList};