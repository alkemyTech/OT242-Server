const { Testimonials } = require("../models");


const createTestimony = async (req, res, next) => {
  const { name, image, content } = req.body;

  try {
    Testimonials.create({ name, image, content });
    return res.status(200).json({ message: "Testimonial added." });

  } catch (err) {
    next(err);
  }
};


const updateTestimony = async (req, res) => {

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
};


const getTestimonials = async (req, res) => {

  try {

    let query = await Testimonials.findAll();

    return res.status(200).json(query);

  } catch (err) {

    res.status(400).json(err);

  }
  
};

const testimonyDetail = async (req, res) => {

  try {

    let query = await Testimonials.findOne({where: {id: req.params.id}});

    return res.status(200).json(query);

  } catch (err) {

    res.status(400).json(err);

  }
  
};

const deleteTestimony = async (req, res) => {
  const testimonyExists = await Testimonials.findOne({  
    where: { id: req.params.id },
  });

  if (testimonyExists) { // If it exists then delete it

    try {

      await Testimonials.destroy({ where: { id: req.params.id } })
      return res.json({ msg: 'Eliminado correctamente' });

    } catch (error) {
      console.log(error)

    }
  } else {

    return res.json({ msg: 'El testimonio no existe' })
  }
};


module.exports = { createTestimony, updateTestimony, getTestimonials, testimonyDetail, deleteTestimony };