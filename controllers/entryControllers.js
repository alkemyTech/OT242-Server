const {Entry} = require('../models')

const getDetail = async (req, res) => {
    try{
        const detail = await Entry.findAll({
            where:{id:req.params.id}
        }) 
        res.json(detail[0])
    } catch (err) {
        res.json({message: err.message})
    }
}

module.exports = {getDetail}
