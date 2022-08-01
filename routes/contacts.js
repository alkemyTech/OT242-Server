var express = require("express");
var router = express.Router();
const contactsController = require("../controllers/contactsController");

/* Contacts List */
router.get("/", contactsController.getContacts);

module.exports = router;