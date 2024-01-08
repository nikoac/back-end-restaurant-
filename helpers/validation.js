const { isObjectIdOrHexString } = require("mongoose");
const { getUserByEmailService } = require("../services/user.services");
const { body } = require("express-validator");
const { calendar } = require("./utils");

const checkEmailExistValidaton = async (email) => {
  const response = await getUserByEmailService(email);
  if (response)
    throw new Error(`El email ${email}, ya se encuentra registrado`);
  return false;
};

const isValidId = async (id) => {
  if (!isObjectIdOrHexString(id)) {
    throw new Error("El id es inválido");
  }
  return false;
};

const checkMaxAgeValidation = ( res,{ req }) => {
  const age = req.body.age;
   if ( age > 100) {
      throw new Error('La edad maxima es de 100 años')
   } else (age < 100 )
     return true
};

const checkMaxYearValidation = ( res,{ req }) => {
  const year = req.body.yearofbirth;
   if ( year > calendar.getFullYear()) {
      throw new Error('Año de Nacimiento invalido')
   } else (year < calendar.getFullYear() && year > calendar.getFullYear() - 100)
     return true
};

const checkMinYearValidation =  ( res,{ req }) => {
  const year = req.body.yearofbirth;
  if ( 16 > calendar.getFullYear() - year) {
    throw new Error('La edad minima es de 16 años')
  } else (16 <= calendar.getFullYear() - year)
  return true
};



const checkMinAgeValidation =  ( res,{ req }) => {
  const age = req.body.age;
  if ( age < 16 ) {
    throw new Error('La edad minima es de 16 años')
  } else (age > 16 )
  return true
};




module.exports = {
  checkEmailExistValidaton,
  isValidId,
  checkMaxAgeValidation,
  checkMinAgeValidation,
  checkMaxYearValidation,
  checkMinYearValidation
};
