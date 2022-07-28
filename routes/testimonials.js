var express = require("express");
var router = express.Router();
const { createTestimonial } = require("../controllers/testimonialsControllers");

/* Create a testimonial */
router.post("/", createTestimonial);

module.exports = router;
