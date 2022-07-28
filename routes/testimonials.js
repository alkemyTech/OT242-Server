var express = require("express");
var router = express.Router();
const { createTestimonial } = require("../controllers/testimonialsControllers");
const {testimonialsValidationRules, validate} = require ('../middlewares/validator')

/* Create a testimonial */
router.post("/", testimonialsValidationRules(), validate, createTestimonial);

module.exports = router;
