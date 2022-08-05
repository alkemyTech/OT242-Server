const {Entry} = require('../models');
const {getEntries} = require('../services/getEntries');

const getAllEntries = async (req, res, next) => {
        let query = await getEntries();
   
        return res.status(200).json(query);
  };


const getNews = async (req,res,next) => {
  try{
    const news = await getEntries(['type'], ['news'], ['id', 'name', 'image', 'createdAt']);
    console.log(news)
    return res.status(200).json(news);
  }catch(err){
    next(err);
  }
}


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

const updateEntry = async (req, res) => {
    try {
      await Entry.update(req.body, {
        where: { id: req.params.id },
      });
  
      const updatedEntry = await Entry.findAll({ // busca el entry actualizado
        where: { id: req.params.id },
      });
      if (updatedEntry != "") {
        // Si el entry existe responde con el entry actualizado
        res.status(200).json({ message: "OK novedad actualizada", novedad: updatedEntry[0] });
      } else {
        throw new Error(); // si el entry no existe levanta un error
      }
    } catch (err) {
      res.status(404).json({ message: "ERROR novedad inexistente" });
    }
  };


  const deleteEntry  = async (req, res) => {
    const newsExists = await Entry.findOne({ // find the entry to be deleted 
      where: { id: req.params.id },
    });

      if(newsExists) { // If it exists then delete it

      try {

        await Entry.destroy({where: { id: req.params.id}})
        res.json({msg: 'it was deleted'})
        
      } catch (error) {
        console.log(error)
        
      }
    }else{
      
      return res.json({msg: 'the news does not exist'})
  }
}

const findEntry = async (req, res) => {
  const id = req.params.id
  try {
    const entries = await Entry.findOne({where: { id }})
    console.log(entries)
    return res.json(entries)
   
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}




module.exports = { getEntries, insertEntry, updateEntry, getNews, deleteEntry, findEntry }
