var express = require('express');
var router = express.Router();
const {body} = require('express-validator');
const { register } = require('../controllers/authControllers');

/* POST user registration. */
router.post('/register',
body('firstName').exists().withMessage('Debe enviar un nombre').isAlpha().withMessage('El nombre debe contener solo letras'),
body('lastName').exists().withMessage('Debe enviar un nombre').isAlpha().withMessage('El nombre debe contener solo letras'),
body('email').exists().withMessage('Debe enviar un email').isEmail().withMessage('El email debe tener formato válido'),
body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
register);

module.exports = router;
