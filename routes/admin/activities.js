// dependencias
var express = require('express');
var router = express.Router();

// import de funciones a correr
const { updateActivity,} = require("../../controllers/activitiesController");
const { activityValidationRules, validate } = require('../../middlewares/validator');

router.patch("/:id", activityValidationRules(), validate, updateActivity)

module.exports = router; 