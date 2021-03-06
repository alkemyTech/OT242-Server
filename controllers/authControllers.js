const {User} = require('../models');
const bcrypt = require('bcrypt');

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
      res.status(201).json(user);
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
      
      res.json(users)
      
  } catch (error) {

      console.log(error)
      
  }

}

module.exports = {
  register,
  loginUser,
}
