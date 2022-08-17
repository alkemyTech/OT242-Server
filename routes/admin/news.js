var express = require("express");
const { body } = require("express-validator");
var router = express.Router();
const { getEntries, insertEntry, deleteEntry, getNews, updateEntry, findEntry, getAllEntries } = require("../../controllers/entriesControllers");
const { entryValidationRules, validate } = require('../../middlewares/validator');
const {upload} = require('../../s3Services/s3');

// Get all entries (news)
router.get(
  "/",
  getAllEntries
);

router.get('/:id', findEntry);

router.post('/',
  entryValidationRules(),
  validate,
  upload.array("image"),
  insertEntry
  );

router.delete('/:id', deleteEntry)

router.put('/:id', updateEntry);


module.exports = router;
