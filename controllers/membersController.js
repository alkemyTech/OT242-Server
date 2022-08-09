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

const updateMember = async (req, res) => {
    try {
        const { name, image } = req.body;
        const updateResult = await members.update(
            { name, image},{
                where: { id: req.params.id },
            }
        );
        if(updateResult[0] === 0) {
            throw ({message: 'No existe un miembro con este id', status: 404});
      
          } else {
            return res.status(200).json({ name, image });
          }
    }
    catch (error) {
        return res.status(400).json(error);

    };
}





module.exports = { createMember, updateMember } 