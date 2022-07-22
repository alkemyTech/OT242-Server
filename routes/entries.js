var express = require("express");
var router = express.Router();
const { getDetail } = require("../controllers/entryControllers");

/* GET an entry detail */
router.get("/novedad/:id", getDetail);

module.exports = router;
