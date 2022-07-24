var express = require('express');
var router = express.Router();
const {userValidationRules, validate} = require('../middlewares/validator');
const { register, loginUser, deleteUser } = require('../controllers/authControllers');


/* POST user registration. */
router.post('/register',
userValidationRules(),
validate,
register);

/* POST user Login. */
router.post('/login', 
[userValidationRules()[2], userValidationRules()[3]],
validate, 
loginUser);

router.post('/users/delete/:id', deleteUser)


module.exports = router;
