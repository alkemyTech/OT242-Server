const { Activity } = require('../models');
const {getActivities: getAll, getActivity: get, updateActivity:update} = require('../services/activities');

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


module.exports = { updateActivity } 