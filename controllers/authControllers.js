const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
  try{
    // Get the user data
    const {firstName, lastName, email, password} = req.body;
    // Hash the password
    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      if(err){
        return res.status(500).json({
          error: err
        });
      }
      // Create the user
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
      })
      res.redirect(307, '/auth/login');
    });
  }catch(err){
    next(err);
  }
}


const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {

      // Verify if email exist
      const users = await User.findOne({where: {email}})
      
      if(!users) {
          
          return res.status(403).json({ok: false})
      }
      
      // Verify if password is correct
      const equal = bcrypt.compareSync(password, users.password)
  
      if(!equal) return res.status(400).json({ok: false})
      

      jwt.sign({user: users}, 'secretKey', { expiresIn: '30d' }, (err, token) => {
        res.json({
            subject: users,
            token: token
        });
      });
      
  } catch (error) {

      console.log(error)
      
  }

}

const deleteUser = async (req, res) => {
  const {id} = req.params;
  try {
      const deletedUser = await User.destroy({where: {id}})
      console.log(deletedUser);
      if(deletedUser==1) {
          return res.status(200).json({message: 'El usuario fué eliminado correctamente'})
      }
       
  } catch (error) {
    return res.status(400).json({message: 'Error. Intentelo mas tarde'})
  }
return res.status(404).json({message: 'El usuario no fue encontrado'})
}

module.exports = {
  register,
  loginUser,
  deleteUser
}
