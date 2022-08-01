var express = require("express");
var router = express.Router();
const { getEntries, insertEntry, deleteEntry, getNews} = require("../../controllers/entriesControllers");
const { entryValidationRules, validate } = require('../../middlewares/validator');

// Get the news
router.get(
  "/",
  getNews
);

router.post("/",
entryValidationRules(),
validate,
insertEntry);

router.delete('/:id', deleteEntry)

module.exports = router;
