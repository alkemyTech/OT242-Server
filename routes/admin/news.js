var express = require("express");
var router = express.Router();
const { getEntries, insertEntry,} = require("../../controllers/entriesControllers");
const { entryValidationRules, validate } = require('../../middlewares/validator');

router.get(
  "/",
  getEntries
);

router.post("/insert",
entryValidationRules(),
validate,
insertEntry);

module.exports = router;
