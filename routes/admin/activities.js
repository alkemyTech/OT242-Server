// dependencias
var express = require('express');
var router = express.Router();

// import de funciones a correr
const { insertActivity, updateActivity, getActivyDetail, getActivities, deleteActivity } = require('./../../controllers/activitiesController');
const { activityValidationRules, validate } = require('../../middlewares/validator');
const {upload} = require('../../s3Services/s3');


// doy de alta la nueva actividad

router.get("/", getActivities);

router.post("/", 
  upload.array("image"),
  activityValidationRules(),
  validate,
  insertActivity
);

router.patch("/:id", upload.array("image"), activityValidationRules(), validate, updateActivity);

router.get("/:id", getActivyDetail);
router.delete('/:id', deleteActivity)
module.exports = router;


