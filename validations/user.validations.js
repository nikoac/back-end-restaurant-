const { isObjectIdOrHexString } = require("mongoose");
const { getUserByEmailService } = require("../services/user.services");
const { body, param} = require("express-validator");
const { checkEmailExistValidaton, isValidId, checkMaxAgeValidation, checkMinAgeValidation, checkMaxYearValidation, checkMinYearValidation } = require("../helpers/validation");


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

const validateId = param("id")
.custom(isValidId)
.not()
.isEmpty()
.withMessage('Por favor escribe el id')

/* Validaciones Año de nacimiento(checkear) */

const validateYear = body('yearofbirth')
.not()
.isEmpty()
.withMessage('Escriba su año de nacimiento, este campo es obligatorio')

const validateYearMax = body('yearofbirth')
.custom(checkMaxYearValidation)

const validateYearMin = body('yearofbirth')
.custom(checkMinYearValidation)

/* Validacion para img de Avatar */
const validateAvatar = body('avatar')
.isURL()
.not()
.isEmpty()
.withMessage('Escribir una URL valida')

const editEmailValidation = body('email')
.custom(checkEmailExistValidaton)


const editPassword = body('password')
.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[A-zA-Z]).{8,}$/)
.withMessage("La contraseña no cumple los requisitos")

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
  validateYear,
  validateYearMax,
  validateYearMin
];

//patchValidations
const editUserValidations = [
  validateId,
  validateYearMax,
  validateYearMin,
  //validateAvatar,
  editEmailValidation
  
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