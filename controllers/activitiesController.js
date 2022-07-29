const { Activity } = require('../models');



const getActivities = async (req, res, next) => {
  let query = await Activity.findAll();

  return res.status(200).json(query);
};


const insertActivity = (req, res, next) => {
  const { name, content } = req.body;

  try {
    const activity = Activity.create({
      name,
      content,
      type:'activity',
      createdAt: new Date
    });         
    return res.status(202).json({ message: 'Actividad almacenada exitosamente!'});  
  }
  catch (error) {
    return res.status(400).json(error);

  };
};


const updateActivity = async (req, res) => {
try {
await Activity.update(req.body, {
  where: { id: req.params.id },
});


// traigo el listado de actividades actualizado para chequear cambio
const updatedActivity = await Activity.findAll({ where: { id: req.params.id } });

if (updatedActivity != "") {
  // Si actividad existe
  res.status(200).json({ message: "Actividad dada de alta", actividad: updatedActivity[0] });
} else {
  // si actividad no esta
  throw new Error(); 
}
} catch(err) {
  res.status(404).json({ message: "Actividad no fue dada de alta" });
}
};


module.exports = { getActivities, insertActivity, updateActivity }