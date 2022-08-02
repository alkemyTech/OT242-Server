const { Activity } = require('../models');


const insertActivity = (req, res, next) => {
  const { name, content } = req.body;

  try {
    const activity = Activity.create({
      name,
      content,
      deletedAt: new Date
    });         
    return res.status(202).json({ message: 'Actividad almacenada exitosamente!'});  
  }
  catch (error) {
    return res.status(400).json(error);

  };
};


module.exports = { insertActivity }