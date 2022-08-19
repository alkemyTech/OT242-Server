const { Activity } = require('../models');


const insertActivity = (req, res, next) => {
  const { name, content } = req.body;

  try {
    const activity = Activity.create({
      name,
      content,
      createdAt: new Date
    });         
    return res.status(202).json({ message: 'Actividad almacenada exitosamente!'});  
  }
  catch (error) {
    return res.status(400).json(error);

  };
};



const { getActivity: get, updateActivity:update, getActivity} = require('../services/activities');

const updateActivity = async (req, res) => {
  try {
    let activity = await get(req.params.id);
    if (activity) {
      activity.name = req.body.name;
      activity.content = req.body.content;
      await update(activity);
    }
    else throw ({message: 'Actividad inexistente', status: 404});
    return res.status(200).json(activity);
  } catch(err) {
      res.status(err.status || 500).json({ message: err.message || 'Error al actualizar actividad' });
  }
};

const getActivyDetail = async (req, res)=> {
  const {id} = req.params
  try{
    const query = await getActivity(id)
    res.status(200).json(query)
    
  }catch(error){

    res.status(400).json(error)
  }
}

const getActivities = async (req, res) => {
  try {
      const activities = await Activity.findAll();
      
      return res.status(200).json(activities);
      
  } catch (error) {

      return res.status(400).json(error);
      
  }
}

const deleteActivity = async (req, res) => {
  const newsExists = await Activity.findOne({ // find the Activity to be deleted 
    where: { id: req.params.id },
  });

  if (newsExists) { // If it exists then delete it

    try {

      await Activity.destroy({ where: { id: req.params.id } })
      res.json({ msg: 'Eliminado correctamente' });

    } catch (error) {
      console.log(error)

    }
  } else {

    return res.json({ msg: 'La novedad no existe' })
  }
}


module.exports = { insertActivity, updateActivity, getActivyDetail, getActivities, deleteActivity } 