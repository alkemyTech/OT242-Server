const { Testimonials } = require("../models");


const createTestimonial = async (req, res, next) => {
  const { name, image, content } = req.body;

  try {
    Testimonials.create({ name, image, content });
    return res.status(200).json({ message: "Testimonial added." });

  } catch (err) {
    next(err);
  }
};

const updateTestimonial = async (req, res) => {
  try {
    await Testimonials.update(req.body, {
      where: { id: req.params.id },
    });

    const updatedTestimonial = await Testimonials.findAll({ // intento traer el testimonial con ese id
      where: { id: req.params.id },
    });
    if (updatedTestimonial != "") { // En el caso que el testi con ese id exista envio el testimonio updated
      res.status(200).json({ message: "Testimonio actualizado", testimonio: updatedTestimonial[0] });
    } else {
      throw new Error(); // si testi con ese id no existe tiro error
    }
  } catch (err) {
    res.status(404).json({ message: "No existe un testimonio con ese id" });
  }
};




module.exports = { createTestimonial, updateTestimonial };
