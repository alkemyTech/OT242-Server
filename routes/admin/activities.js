// dependencias
var express = require('express');
var router = express.Router();

// import de funciones a correr
const { getActivities, insertActivity,} = require("../../controllers/activitiesController");
//const { activityValidationRules, validate } = require('../../middlewares/validator');



/* POST dar de alta actividad */

// traigo el listado de actividades
router.get(
  "/",
  getActivities
);

// doy de alta la nueva actividad
router.post("/",
  //activityValidationRules(),
  //validate,
insertActivity);



module.exports = router;