const { Entry } = require('../models');
const { UploadImg, upload, VerifyMulterError, deleteImg } = require('../s3Services/s3');

const getAllEntries = async (req, res) => {
  try{
    const query = await Entry.findAll();
    return res.status(200).json(query);
  }catch{
    res.status(404).json({ message: "Something went wrong" });
  }
};


const getNews = async (req, res, next) => {
  try {
    const news = await getEntries(['type'], ['news'], ['id', 'name', 'image', 'createdAt']);
    console.log(news)
    return res.status(200).json(news);
  } catch (err) {
    next(err);
  }
}
const insertEntry = async (req, res, next) => {

  const data = {name: req.body.name,
                content: req.body.content,
                categoryId: req.body.categoryId,
                createdAt: new Date
  }
try {
const results = await UploadImg(req.files);
if(results.length > 0){
  data.image = results[0].key
}

    const entry = Entry.create(data)
    return res.status(202).json({ message: 'Datos almacenados exitosamente!' });
  } catch (err) {
    res.status(404).json({ message: "ERROR intentelo mas tarde" });
  }
};

const updateEntry = async (req, res) => {
  const data = {
                name: req.body.name,
                content: req.body.content,
                categoryId: req.body.categoryId,
                updateAt: new Date
              }
try {
const results = await UploadImg(req.files);
if(results.length > 0){
data.image = results[0].key
}

    const updateResult = await Entry.update(data, {
      where: { id: req.params.id },
    });
    if(updatedEntry != "") {
      // Si el entry existe responde con el entry actualizado
      res.status(200).json({ message: "OK novedad actualizada", novedad: updatedEntry[0] });

    } else {
      throw new Error(); // si el entry no existe levanta un error
    }
  } catch (err) {
    res.status(404).json({ message: "ERROR novedad inexistente" });
  }
};

const deleteEntry = async (req, res) => {
  const newsExists = await Entry.findOne({ // find the entry to be deleted 
    where: { id: req.params.id },
  });

  if (newsExists) { // If it exists then delete it

    try {

      await Entry.destroy({where: { id: req.params.id}})
      res.json({msg: 'it was deleted'})

    } catch (error) {
      console.log(error)

    }
  } else {

    return res.json({msg: 'the news does not exist'})
  }
}

const findEntry = async (req, res) => {
  const id = req.params.id
  try {
    const entry = await Entry.findOne({where: { id }})

    if(entry != null){
      return res.status(200).json(entry)
    }else{
      return res.status(404).json({ message: 'Novedad no existe' })
    }
    
   
  } catch (err) {
    return res.status(404).json({ error: 'Something went wrong' })

  }
}




module.exports = { insertEntry, updateEntry, deleteEntry, findEntry, getAllEntries }
