const express = require("express");
const router = express.Router();
const membersController = require('../controllers/membersController');
const { membersValidationRules, validate } = require('../middlewares/validator');

router.get('/', membersController.listMembers); // List members

router.post('/', membersValidationRules(), validate, membersController.createMember); //Create member

router.put('/:id', membersController.updateMember)

module.exports = router; 

