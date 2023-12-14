const { isObjectIdOrHexString } = require("mongoose");
const { getUserByEmailService } = require("../services/user.services");
const { body, param} = require("express-validator");
const { checkEmailExistValidaton, isValidId, checkMaxAgeValidation, checkMinAgeValidation } = require("../helpers/validation");


const validateEmail = body("email")
.isEmail()
.withMessage("El campo email no es un email valido")
.not()
.isEmpty()
.withMessage("El campo email es obligatorio")
.custom(checkEmailExistValidaton);

const validatePassword = body("password")
.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[A-zA-Z]).{8,}$/)
.withMessage("La contraseña no cumple los requisitos")
.not()
.isEmpty()
.withMessage("El campo password es obligatorio");

const validateName = body("name")
.not()
.isEmpty()
.withMessage("El campo name es obligatorio");

const validateLastName = body("lastName")
.not()
.isEmpty()
.withMessage("El campo lastName es obligatorio");

const validateAge = body("age")
.not()
.isEmpty()
.withMessage("El campo age es obligatorio");

const validateMaxAge = body('age')
.custom(checkMaxAgeValidation)

const validateMinAge = body('age')
.custom(checkMinAgeValidation)

const validateId = param("id")
.custom(isValidId)
.not()
.isEmpty()
.withMessage('Por favor escribe el id')

//getUserIdValidations
const getUserIdValidations = [
  validateId
]

//getUserEmailValidations
const getUserEmailValidations = [
  validateEmail
]; 

//postValidations
const createUserValidations = [
  validateEmail,
  validatePassword,
  validateName,
  validateLastName,
  validateAge,
];

//patchValidations
const editUserValidations = [
  validateId,
  validateMaxAge,
  validateMinAge
]

//deleteUserValidations
const deleteUserValidations = [
  validateId
]

module.exports ={
  createUserValidations,
  getUserEmailValidations,
  getUserIdValidations,
  editUserValidations,
  deleteUserValidations
}