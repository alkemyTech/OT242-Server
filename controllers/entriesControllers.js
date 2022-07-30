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
    const deletednews = await Entry.findAll({ // busca el entry que se va a eliminar
      where: { id: req.params.id },
    });

      if(deletednews) { // Si existe entonces lo borra

        try {
          await Entry.destroy({where: { id: req.params.id}})
          
        } catch (error) {
          
          console.log(error)
          
        }
        
        res.json({msg: 'it was deleted'})

    }else{

      return res.json({msg: 'the entrie isnt exists'})

    }
  }





module.exports = { getEntries, insertEntry, updateEntry, deleteEntry }