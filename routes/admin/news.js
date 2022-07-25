var express = require("express");
var router = express.Router();
const { getNews, insertEntry,} = require("../../controllers/entriesControllers");
const { entryValidationRules, validate } = require('../../middlewares/validator');
const {getNews} = require('../controllers/newsControllers.js');

// Get the news
router.get(
  "/",
  getNews
);

router.post("/",
entryValidationRules(),
validate,
insertEntry);

module.exports = router;
