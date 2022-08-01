const { testimonials } = require("../models");

const createTestimonial = async (req, res, next) => {
  const { name, image, content } = req.body;

  try {
    testimonials.create({ name, image, content });
    return res.status(200).json({ message: "Testimonial added." });
  } catch (err) {
    next(err);
  }
};

module.exports = { createTestimonial };
