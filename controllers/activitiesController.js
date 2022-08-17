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



const {getActivities: getAll, getActivity: get, updateActivity:update, getActivity} = require('../services/activities');

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
    const query = await Activity.findOne({where: {id}
    });
    if(!query || query == null) {
          
      return res.status(404).json({message: 'La actividad solicitada no existe'})
  }
    res.status(200).json(query)

  }catch(err){

    res.status(400).json(err)
  }
}
module.exports = { insertActivity, updateActivity, getActivyDetail } 