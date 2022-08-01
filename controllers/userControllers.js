const {User} = require('../models');

const usersList = async (req, res) => {
    try {
        const users = await User.findAll();
        
        return res.status(200).json(users);
        
    } catch (error) {
  
        return res.status(400).json(error);
        
    }
}

module.exports = {usersList};