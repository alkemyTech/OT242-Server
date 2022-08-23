const { Activity } = require('../models');
const { UploadImg, upload, VerifyMulterError, deleteImg } = require('../s3Services/s3');


const insertActivity = async (req, res, next) => {

  const data = {
                name: req.body.name,
                content: req.body.content,
                createdAt: new Date
               }
      try {
      const results = await UploadImg(req.files);
      if(results.length > 0){
        data.image = results[0].key
      }

    const activity = Activity.create(data);         
    return res.status(202).json({ message: 'Actividad almacenada exitosamente!'});  
  }
  catch (error) {
    return res.status(400).json(error);

  };
};



const { getActivity: get, updateActivity:update, getActivity} = require('../services/activities');

const updateActivity = async (req, res) => {

  const data = {name: req.body.name,
                content: req.body.content,
                updateAt: new Date
  }
  console.log(req.body)
    try {
        const results = await UploadImg(req.files);

        if(results.length > 0) {
          data.image = results[0].key
        }
        const updateResult = await Activity.update(
            data, {
                where: { id: req.params.id },
            }
        )

        if(updateResult[0] === 0) {
            throw ({message: 'No existe una actividad con este id', status: 404});
      
          } else {
            return res.status(200).json(data);
          }
    }
    catch (error) {
        return res.status(400).json(error);

    };
}

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