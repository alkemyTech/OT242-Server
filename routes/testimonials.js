var express = require("express");
var router = express.Router();
const { createTestimony, updateTestimony, getTestimonials, testimonyDetail, deleteTestimony } = require("../controllers/testimonialsControllers");
const {testimonialsValidationRules, validate} = require ('../middlewares/validator')

/* Create a testimony */
router.post("/", testimonialsValidationRules(), validate, createTestimony);


/* Update testimonial */
router.put("/:id", updateTestimony);

/* Get testimonials list */
router.get("/", getTestimonials);

router.get("/:id", testimonyDetail);

/* Delete testimony */
router.delete("/:id", deleteTestimony);

module.exports = router;
