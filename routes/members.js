const express = require("express");
const router = express.Router();

const membersController = require('../controllers/membersController');

const {membersValidationRules, validate} = require('../middlewares/validator');

router.post('/', membersValidationRules(), validate, membersController.createMember); // Create member

module.exports = router;