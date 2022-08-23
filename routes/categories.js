var express = require("express");
var router = express.Router();
const { categoriesValidationRules, validate } = require('../middlewares/validator');
const { insertCategory, getCategoriesNames, deleteCategory, updateCategory, getCategoryDetail } = require("../controllers/categoriesController");

/* GET CATEGORIES NAMES */
router.get("/", getCategoriesNames);


router.post("/",
categoriesValidationRules(),
validate,
insertCategory);

router.delete('/:id', deleteCategory);

router.put('/:id', updateCategory);

router.get('/:id', getCategoryDetail);


module.exports = router;
