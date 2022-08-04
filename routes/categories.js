var express = require("express");
var router = express.Router();
const { getCategoriesByName } = require("../controllers/categoriesControllers");

/* GET A CATEGORIES LIST BY NAME */
router.get("/", getCategoriesByName);

module.exports = router;
