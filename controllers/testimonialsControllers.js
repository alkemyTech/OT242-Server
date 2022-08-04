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
    const { name, image, content } = req.body;

    const updateResult = await Testimonials.update(
      { name, image, content }, {
        where: { id: req.params.id },
      }
    );

    if(updateResult[0] === 0) {
      throw ({message: 'No existe testimonio con este id', status: 404});

    } else {
      return res.status(200).json({ name, image, content });
    }

  } catch(err) {
    res.status(err.status || 500).json({ message: err.message || 'Error al actualizar el testimonio' });

  }


  /*} catch (err) {
    res.status(404).json({ message: "No existe un testimonio con ese id" });
  }*/
};

/*const updateTestimonial = async (req, res) => {
  try {
    let testimonial = await get(req.params.id); // consigo el id que tengo que updatear
    
    if (testimonial) {
      testimonial.name = req.body.name;
      testimonial.content = req.body.content;
      testimonial.image = req.body.image;
      await update(testimonial);
    }
    else throw ({message: 'No existe testimonio con este id', status: 404});
    return res.status(200).json(testimonial);
  } catch(err) {
      res.status(err.status || 500).json({ message: err.message || 'Error al actualizar el testimonio' });
  }
};*/



module.exports = { createTestimonial, updateTestimonial };
