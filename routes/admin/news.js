var express = require("express");
var router = express.Router();
const { getEntries, insertEntry, deleteEntry, getNews, updateEntry, findEntry } = require("../../controllers/entriesControllers");
const { entryValidationRules, validate } = require('../../middlewares/validator');

// Get the news
router.get(
  "/",
  getNews
);

router.get('/:id', findEntry);

router.post('/',
entryValidationRules(),
validate,
insertEntry);

router.delete('/:id', deleteEntry)

router.put('/:id', updateEntry);


module.exports = router;
