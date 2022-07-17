const { validationResult } = require('express-validator')
const {User} = require('../models/index')
// const bcrypt = require('bcrypt')


const loginUser = async (req, res) => {
    
    const {email, password} = req.body

    const errors = validationResult(req)

    if(!errors.isEmpty()) return res.status(400).json(errors)

    
    try {

        // Verify if email exist
        const users = await User.findOne({where: {email}})
        
        if(!users) {
            
            return res.status(403).json({ok: false})
        }
        
        // Verify if password is correct
        // const equals = bcrypt.compareSync(password, user.password)
    
        // if(!equals) return res.status(400).json({msg: 'the password is incorrect'})

        
        res.json(users)
        
    } catch (error) {

        console.log(error)
        
    }

}



module.exports = {
loginUser,
}
