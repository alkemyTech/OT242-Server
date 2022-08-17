const { Entry } = require('../models');
const { getEntries } = require('../services/getEntries');
const { UploadImg, upload, VerifyMulterError, deleteImg } = require('../s3Services/s3');

const getAllEntries = async (req, res, next) => {
  const query = await Entry.findAll();
  return res.status(200).json(query);
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
  const { name, content, categoryId } = req.body;
  try {
    const results = await UploadImg(req.files);
    const entry = Entry.create({
      name,
      content,
      image: results[0].key,
      categoryId,
      type: 'news',
      createdAt: new Date
    })
    return res.status(202).json({ message: 'Datos almacenados exitosamente!' });
  } catch (err) {
    res.status(404).json({ message: "ERROR intentelo mas tarde" });
  }
};

const updateEntry = async (req, res) => {
  const { name, content, categoryId } = req.body;
  try {
    const results = await UploadImg(req.files);
    const updateResult = await Entry.update({
      name,
      content,
      image: results[0].key,
      categoryId,
      updateAt: new Date
    }, {
      where: { id: req.params.id },
    });
    if(updateResult[0] === 0) {
      throw ({message: 'No existe una novedad con este id', status: 404});

    } else {
      return res.status(200).json({ message: "OK novedad actualizada", novedad: updateResult[0] });
    }
  } catch (err) {
    res.status(404).json({ message: "ERROR intentelo mas tarde" });
  }
};

const deleteEntry = async (req, res) => {
  const newsExists = await Entry.findOne({ // find the entry to be deleted 
    where: { id: req.params.id },
  });

  if (newsExists) { // If it exists then delete it

    try {

      await Entry.destroy({ where: { id: req.params.id } })
      res.json({ msg: 'Eliminado correctamente' });

    } catch (error) {
      console.log(error)

    }
  } else {

    return res.json({ msg: 'La novedad no existe' })
  }
}

const findEntry = async (req, res) => {
  const id = req.params.id
  try {
    const entries = await Entry.findOne({ where: { id } })
    console.log(entries)
    return res.json(entries)

  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'ERROR intentelo mas tarde' })
  }
}




module.exports = { getEntries, insertEntry, updateEntry, getNews, deleteEntry, findEntry, getAllEntries }
