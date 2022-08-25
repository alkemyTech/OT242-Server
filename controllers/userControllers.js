const {User} = require('../models');
const { UploadImg, upload, VerifyMulterError, deleteImg } = require('../s3Services/s3');

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
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      updateAt: new Date
}
console.log(req.body)
try {
const results = await UploadImg(req.files);

if(results.length > 0) {
data.image = results[0].key
}

      const updateResult = await User.update( data,
        {
          where: { id: req.params.id },
        }
      );
  
      return res.status(200).json({ updateResult, msg: 'Rol actualizado' });


      
  
    } catch(err) {
      res.status(400).json(err);
  
    }
  };

module.exports = {usersList, userDetail, deleteUser, updateUser};