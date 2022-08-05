const {Categories} = require('../models');

const insertCategory = (req, res) => {
    const { name, description} = req.body;

     try {
    
         const category = Categories.create({
             name,
             description
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
        attributes: ["name"],
        order: [["name", "ASC"]],
      });
      return res.status(200).json(query);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
};

 module.exports = { insertCategory, getCategoriesNames }