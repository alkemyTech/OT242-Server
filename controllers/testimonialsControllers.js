const { testimonials } = require("../models");

const createTestimonial = async (req, res) => {
  const { name, image, content } = req.body;

  try {
    if (!name || !image || !content) {
      return res.status(400).json({ message: "Fill in all the fields." });
    } else {
      testimonials.create({ name, image, content });
      return res.status(200).json({ message: "Testimonial added." });
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = { createTestimonial };
