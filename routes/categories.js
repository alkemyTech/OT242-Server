var express = require("express");
var router = express.Router();
const { categoriesValidationRules, validate } = require('../middlewares/validator');
const { insertCategory } = require("../controllers/categoriesController");


router.post("/",
categoriesValidationRules(),
validate,
insertCategory);


module.exports = router;
