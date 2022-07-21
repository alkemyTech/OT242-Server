const {body, validationResult} = require('express-validator');

const userValidationRules = () => {
  return [
    body('firstName').exists().withMessage('Debe enviar un nombre').isAlpha().withMessage('El nombre debe contener solo letras'),
    body('lastName').exists().withMessage('Debe enviar un nombre').isAlpha().withMessage('El nombre debe contener solo letras'),
    body('email').exists().withMessage('Debe enviar un email').isEmail().withMessage('El email debe tener formato válido'),
    body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
  ]
}

const entryValidationRules = () => {
  return [
    body('name').not().isEmpty().withMessage('Inserte un nombre').isLength({max: 20}).withMessage('El nombre no debe superar los 20 caracteres'),
    body('content').not().isEmpty().withMessage('Inserte una descripcion'),
    body('image').not().isEmpty().withMessage('Inserte una imagen'),
    body('categoryId').not().isEmpty().withMessage('Indique la categoria'),
  ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      });
    }
    next();
}

module.exports = {
  userValidationRules,
  entryValidationRules,
  validate
}