const express = require("express");
const {upload} = require('../../s3Services/s3');

const router = express.Router();
const membersController = require('../../controllers/membersController');
const { membersValidationRules, validate } = require('../../middlewares/validator');

router.get('/', membersController.listMembers); // List members

router.get("/:id", membersController.getMemberById);

router.post('/', upload.array("image"), membersValidationRules(), validate,  membersController.createMember); //Create member

router.patch('/:id', upload.array("image"), membersController.updateMember);


/* Eliminacion de miembros */
router.delete('/:id', membersController.deleteMember);

module.exports = router; 

