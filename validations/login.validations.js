const { body, param} = require("express-validator");
const { checkEmailExistValidaton, isValidId } = require("../helpers/validation");


const validateEmail = body("email")
.isEmail()
.withMessage("El campo email no es un email valido")
.not()
.isEmpty()
.withMessage("El campo email es obligatorio");

const validatePassword = body("password")
.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[A-zA-Z]).{8,}$/)
.withMessage("El password no cumple los requisitos")
.not()
.isEmpty()
.withMessage("El campo password es obligatorio");




//postValidations

const postLoginValidations = [
  validateEmail,
  validatePassword
]

module.exports = {
  postLoginValidations
}