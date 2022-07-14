const {validationResult} = require('express-validator');
const {User} = require('../models');
const bcrypt = require('bcrypt');

const register = (req, res, next) => {
  try{
    // Get the validation result
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      });
    }
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

module.exports = {
  register
}