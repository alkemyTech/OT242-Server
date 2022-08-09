const {members} = require('../models');


const createMember = (req, res, next) => {
        try {
       
            const member = members.create({
                name: req.body.name,
                image: req.body.image,
                createdAt: new Date
             })
                     
              return res.status(202).json({ message: 'Datos almacenados exitosamente!'});
            
        }
    
        catch (error) {
            return res.status(400).json(error);
    
        };
    };






module.exports = { createMember }