// dependencias
var express = require('express');
var router = express.Router();

// middlewares
const {contactsValidationRules, validate} = require('../middlewares/validator');


/* POST /contacts verifico que contenga campos name y email */
router.post('/contacts',
  contactsValidationRules(),
  validate
);



module.exports = router;