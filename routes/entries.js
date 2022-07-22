var express = require("express");
var router = express.Router();
const { updateEntry } = require("../controllers/entryControllers");

/* UPDATE ENTRY */
router.put("/news/:id", updateEntry);

module.exports = router;
