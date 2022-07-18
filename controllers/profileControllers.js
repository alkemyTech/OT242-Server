const jwt = require('jsonwebtoken');
require('dotenv').config();


const getAuthProfile = (req, res, next)=>{
    // Información del usuario autorizado obtenida 
    const userData = {
        firstName: 'Manuel',
        lastName: 'Bautista',
        email: 'manubautista2009@gmail.com'
    }

    try{
        res.json(userData)
    } catch {
        res.json({err : 'Error getting authenticated user data'})
        next()
    };
}

module.exports = {getAuthProfile}