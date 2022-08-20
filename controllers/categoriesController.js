const {Categories} = require('../models');

const insertCategory = (req, res) => {
    const { name, description} = req.body;

     try {
    
         const category = Categories.create({
             name,
             description,
             createdAt: new Date
          })
                  
           return res.status(202).json({ message: 'Datos almacenados exitosamente!'});
         
     }
 
     catch (error) {
         return res.status(400).json(error);
 
     };
};

const getCategoriesNames = async (req, res) => {
    try {
      let query = await Categories.findAll({
        order: [["name", "ASC"]],
      });
      return res.status(200).json(query);
    } catch (error) {
      return res.status(400).json(error);
    }
};

const getCategoryDetail = async (req, res) => {
  try {
    let query = await Categories.findOne({
      where: {id: req.params.id},
    });
    return res.status(200).json(query);
  } catch (error) {
    return res.status(400).json(error);
  }
};


const deleteCategory = async (req, res) => {
  const categoryExists = await Categories.findOne({  
    where: { id: req.params.id },
  });

  if (categoryExists) { // If it exists then delete it

    try {

      await Categories.destroy({ where: { id: req.params.id } })
      res.json({ msg: 'Eliminado correctamente' });

    } catch (error) {
      console.log(error)

    }
  } else {

    return res.json({ msg: 'La categoría no existe' })
  }
};


const updateCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
      let updateResult = await Categories.update({
        name,
        description,
        updateAt: new Date
      },{
        where: { id: req.params.id }
      })
      return res.status(200).json(updateResult);
  } catch(err) {
      res.status(404).json({ message: 'Error al actualizar categoría' });
  }
};

 module.exports = { insertCategory, getCategoriesNames, deleteCategory, updateCategory, getCategoryDetail }