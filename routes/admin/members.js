const express = require("express");

const router = express.Router();
const membersController = require('../../controllers/membersController');
const { membersValidationRules, validate } = require('../../middlewares/validator');

router.get('/', membersController.listMembers); // List members

router.get("/:id", membersController.getMemberById);

router.post('/', membersValidationRules(), validate, membersController.createMember); //Create member

router.patch('/:id', membersController.updateMember);


/* Eliminacion de miembros */
router.delete('/:id', membersController.deleteMember);

module.exports = router; 

