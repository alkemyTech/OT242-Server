var express = require("express");
var router = express.Router();
const { createTestimonial, updateTestimonial } = require("../controllers/testimonialsControllers");
const {testimonialsValidationRules, validate} = require ('../middlewares/validator')

/* Create a testimonial */
router.post("/", testimonialsValidationRules(), validate, createTestimonial);


/* Update testimonial */
router.put("/:id", 
  updateTestimonial
);

module.exports = router;
