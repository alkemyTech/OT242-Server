var express = require("express");
var router = express.Router();
const { getEntries, insertEntry, deleteEntry} = require("../../controllers/entriesControllers");
const { entryValidationRules, validate } = require('../../middlewares/validator');

router.get(
  "/",
  getEntries
);

router.post("/",
entryValidationRules(),
validate,
insertEntry);

router.delete('/:id', deleteEntry)

module.exports = router;
