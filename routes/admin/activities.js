// dependencias
var express = require('express');
var router = express.Router();

// import de funciones a correr
const { insertActivity, updateActivity } = require('./../../controllers/activitiesController');
const { activityValidationRules, validate } = require('../../middlewares/validator');


// doy de alta la nueva actividad
router.post("/",
  activityValidationRules(),
  validate,
  insertActivity
);

router.patch("/:id", activityValidationRules(), validate, updateActivity);

module.exports = router;


