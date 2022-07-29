// dependencias
var express = require('express');
var router = express.Router();

// middlewares
const {contactsValidationRules, validate} = require('../middlewares/validator');


/* POST verifico que contenga campos name y email y registro */
router.post('/',   
  contactsValidationRules(),
  validate
);


module.exports = router;