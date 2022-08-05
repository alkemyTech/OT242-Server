var express = require("express");
var router = express.Router();
const { categoriesValidationRules, validate } = require('../middlewares/validator');
const { insertCategory, getCategoriesNames } = require("../controllers/categoriesController");

/* GET CATEGORIES NAMES */
router.get("/", getCategoriesNames);


router.post("/",
categoriesValidationRules(),
validate,
insertCategory);


module.exports = router;
