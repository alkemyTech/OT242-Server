const {members} = require('../models');
const { UploadImg, upload, VerifyMulterError, deleteImg } = require('../s3Services/s3');


const createMember = async (req, res) => {

  console.log(req.body)

  const data = {name: req.body.name,
                role: req.body.role,
                content: req.body.content,
                createdAt: new Date
              }
        try {
            const results = await UploadImg(req.files);
            if(results.length > 0){
              data.image = results[0].key
            }
            const member = members.create(data)

              return res.status(202).json({ message: 'Datos almacenados exitosamente!'});

        }

        catch (error) {
            return res.status(400).json(error);

        };
};

const listMembers = async (req, res) => {
    try {
       
        let membersList = await members.findAll();
                 
        return res.status(200).json(membersList);
        
    }

    catch (error) {
        return res.status(400).json(error);

    };
}

const updateMember = async (req, res) => {

  const data = {name: req.body.name,
                role: req.body.role,
                content: req.body.content,
                updateAt: new Date
  }
  console.log(req.body)
    try {
        const results = await UploadImg(req.files);

        if(results.length > 0) {
          data.image = results[0].key
        }
        const updateResult = await members.update(
            data, {
                where: { id: req.params.id },
            }
        )

        if(updateResult[0] === 0) {
            throw ({message: 'No existe un miembro con este id', status: 404});
      
          } else {
            return res.status(200).json({ name, image, content, role });
          }
    }
    catch (error) {
        return res.status(400).json(error);

    };
}


const deleteMember  = async (req, res) => {

    const memberId = req.params.id;

    const memberExists = await members.findOne({ // search member via id 
      where: { id: memberId },
    });

    if(memberExists) { // If it exists, then delete it
        
      try {
        await members.destroy({where: { id: memberId}});
        res.status(200).json({msg: 'member with id:' + memberId + ' has been deleted'});
        
      } catch (error) {
        console.log(error);
      }

    } else {
      
      return res.status(400).json({msg: 'There is no member with id:' + memberId})
  }
};

const getMemberById = async (req, res)=> {
  const {id} = req.params
  try{
    const query = await members.findOne({ // search member via id 
      where: { id },
    });

    res.status(200).json(query)
    
  }catch(error){

    res.status(400).json(error)
  }
}


module.exports = { createMember, listMembers, updateMember, deleteMember, getMemberById }; 


