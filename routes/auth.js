var express = require('express');
var router = express.Router();
const {userValidationRules, validate} = require('../middlewares/validator');
const { register, loginUser } = require('../controllers/authControllers');

/* POST user registration. */
router.post('/register',
userValidationRules(),
validate,
register);


router.post('/login', [userValidationRules()[2], userValidationRules()[3]], validate, loginUser);

module.exports = router;
