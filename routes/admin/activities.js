// dependencias
var express = require('express');
var router = express.Router();

// import de funciones a correr
const { insertActivity, updateActivity, getActivyDetail, getActivities } = require('./../../controllers/activitiesController');
const { activityValidationRules, validate } = require('../../middlewares/validator');


// doy de alta la nueva actividad

router.get("/", getActivities);

router.post("/",
  activityValidationRules(),
  validate,
  insertActivity
);

router.patch("/:id", activityValidationRules(), validate, updateActivity);

router.get("/:id", getActivyDetail);
module.exports = router;


