var express = require("express");
var router = express.Router();
const { createTestimonial, updateTestimonial, getTestimonials } = require("../controllers/testimonialsControllers");
const {testimonialsValidationRules, validate} = require ('../middlewares/validator')

/* Create a testimonial */
router.post("/", testimonialsValidationRules(), validate, createTestimonial);


/* Update testimonial */
router.put("/:id", 
  updateTestimonial
);

/* Get testimonials list */
router.get("/", getTestimonials)
module.exports = router;
