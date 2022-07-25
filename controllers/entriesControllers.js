const {Entry} = require('../models');


const getEntries = async (req, res, next) => {
        let query = await Entry.findAll();
   
        return res.status(200).json(query);
  };


const insertEntry = (req, res, next) => {
       const { name, content, image, categoryId } = req.body;

        try {
       
            const entry = Entry.create({
                name,
                content,
                image,
                categoryId,
                type:'news',
                createdAt: new Date
             })
                     
              return res.status(202).json({ message: 'Datos almacenados exitosamente!'});
            
        }
    
        catch (error) {
            return res.status(400).json(error);
    
        };
    };



module.exports = { getEntries, insertEntry }