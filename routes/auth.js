var express = require('express');
var router = express.Router();
const {userValidationRules, validate} = require('../middlewares/validator');
const { register } = require('../controllers/authControllers');

/* POST user registration. */
router.post('/register',
userValidationRules(),
validate,
register);

module.exports = router;
