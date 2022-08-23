const {User} = require('../models');

const usersList = async (req, res) => {
    try {
        const users = await User.findAll();
        
        return res.status(200).json(users);
        
    } catch (error) {
  
        return res.status(400).json(error);
        
    }
};

const userDetail = async (req, res) => {

    try {
  
      let query = await User.findOne({where: {id: req.params.id}});
  
      return res.status(200).json(query);
  
    } catch (err) {
  
      res.status(400).json(err);
  
    }
    
  };

const deleteUser = async (req, res) => {
    const userExists = await User.findOne({  
      where: { id: req.params.id },
    });
  
    if (userExists) { // If it exists then delete it
  
      try {
  
        await User.destroy({ where: { id: req.params.id } })
        return res.json({ msg: 'Eliminado correctamente' });
  
      } catch (error) {
        console.log(error)
  
      }
    } else {
  
      return res.json({ msg: 'El Usuario no existe' })
    }
  };


  const updateUser = async (req, res) => {

  try {
      const updateResult = await User.update(
        {roleId: req.body.roleId} , {
          where: { id: req.params.id },
        }
      );
  
      return res.status(200).json({ updateResult, msg: 'Rol actualizado' });
      
  
    } catch(err) {
      res.status(400).json(err);
  
    }
  };

module.exports = {usersList, userDetail, deleteUser, updateUser};