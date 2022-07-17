var express = require('express');
var router = express.Router();
const { check } = require('express-validator')


const {loginUser} = require('../controllers/usersControllers')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/auth/login', [
  
  check('password', 'Password is invalid').not().isEmpty(),
  check('email', 'The email is invalid').isEmail()

], loginUser);





module.exports = router;
