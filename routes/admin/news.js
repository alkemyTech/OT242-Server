var express = require("express");
var router = express.Router();
const { getEntries, insertEntry, deleteEntry, getNews, updateEntry, findEntry, getAllEntries } = require("../../controllers/entriesControllers");
const { entryValidationRules, validate } = require('../../middlewares/validator');

// Get all entries (news)
router.get(
  "/",
  getAllEntries
);

router.get('/:id', findEntry);

router.post('/',
entryValidationRules(),
validate,
insertEntry);

router.delete('/:id', deleteEntry)

router.put('/:id', updateEntry);


module.exports = router;
