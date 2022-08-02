// dependencias
var express = require('express');
var router = express.Router();

// middlewares
const {contactsValidationRules, validate} = require('../middlewares/validator');
const { getContacts, insertContact } = require("../controllers/contactsController");


router.get(
  "/",
  getContacts
);
/* POST verifico que contenga campos name y email y registro */
router.post('/',   
  contactsValidationRules(),
  validate,
  insertContact
);


module.exports = router;