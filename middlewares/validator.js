const {body, validationResult} = require('express-validator');

const userValidationRules = () => {
  return [
    body('firstName').exists().withMessage('Debe enviar un nombre').isAlpha().withMessage('El nombre debe contener solo letras'),
    body('lastName').exists().withMessage('Debe enviar un apellido').isAlpha().withMessage('El apellido debe contener solo letras'),
    body('email').exists().withMessage('Debe enviar un email').isEmail().withMessage('El email debe tener formato válido'),
    body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
  ]
};

const entryValidationRules = () => {
  return [
    body('name').exists().withMessage('Name undefined').not().isEmpty().withMessage('Campo nombre vacio'),
    body('content').exists().withMessage('content undefined').not().isEmpty().withMessage('Inserte una descripcion'),
    body('categoryId').exists().withMessage('categoryId undefined').not().isEmpty().withMessage('Indique la categoria'),
  ]
};

const activityValidationRules = () => {
  return [
    body('name').exists().withMessage('Name undefined').not().isEmpty().withMessage('Campo nombre vacio'),
    body('content').exists().withMessage('Content undefined').not().isEmpty().withMessage('Inserte una descripcion'),
  ]
};

const contactsValidationRules = () => {
  return [
    body('name').exists().withMessage('Name undefined').not().isEmpty().withMessage('Campo nombre vacio'),
    body('email').exists().withMessage('Email undefined').isEmail().withMessage('El email debe tener formato válido'),
  ]
};
const testimonialsValidationRules = () => {
  return [
    body('name').exists().withMessage('Name undefined').not().isEmpty().withMessage('Campo nombre vacio'),
    body('content').exists().withMessage('Content undefined').not().isEmpty().withMessage('Campo contenido vacio'),
  ]
}

const categoriesValidationRules = () => {
  return [
    body('name').exists().withMessage('Name undefined').not().isEmpty().withMessage('Campo nombre vacio'),
    body('name').isString(),
  ]
};
const membersValidationRules = () => {
  return [
    body('name').exists().withMessage('Name undefined').not().isEmpty().withMessage('Campo nombre vacio'),
    body('name').isString(),
  ]
};


const validate = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      });
    }
    next();
};

module.exports = {
  userValidationRules,
  entryValidationRules,
  activityValidationRules,
  contactsValidationRules,
  testimonialsValidationRules,
  categoriesValidationRules,
  membersValidationRules,
  validate
};