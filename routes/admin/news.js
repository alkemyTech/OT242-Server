var express = require("express");
var router = express.Router();
const { insertEntry, deleteEntry, getNews, updateEntry, findEntry, getAllEntries } = require("../../controllers/entriesControllers");
const { entryValidationRules, validate } = require('../../middlewares/validator');
const {upload} = require('../../s3Services/s3');

// Get all entries (news)
router.get(
  "/",
  getAllEntries
);

router.get('/:id', findEntry);

router.post('/', upload.array("image"),
  entryValidationRules(),
  validate,   
  insertEntry
  );

router.delete('/:id', deleteEntry)

router.put('/:id',   upload.array("image"), updateEntry);


module.exports = router;
