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


const checkMaxYearValidation = ( res,{ req }) => {
  const year = req.body.yearofbirth;
   if ( 100 < calendar.getFullYear() - year ) {
      throw new Error('La edad maxima es de 100 años')
   } else (100 >= calendar.getFullYear() - year)
     return true
};

const checkMinYearValidation =  ( res,{ req }) => {
  const year = req.body.yearofbirth;
  if ( 16 > calendar.getFullYear() - year) {
    throw new Error('La edad minima es de 16 años')
  } else (16 <= calendar.getFullYear() - year)
  return true
};




const checkEditBookingValidation = (res, {req}) => {
  const response = req.body;
  if (response.day < calendar.getDate() && response.month <= calendar.getMonth()+1){
      throw new Error ('La fecha que estas igresando ya paso')

    }
  return true
    
  }

const checkGuestsValidations = (res, {req}) => {
  const guests = req.body.guests
  if ( guests < 1 || guests > 15) {
    throw new Error ('El numero maximo de comensales  es 15')
  }
  return true
}

const checkHourValidations = (res, {req}) => {
  const hour = req.body.hour
  if (hour < 13 || hour > 22) {
    throw new Error ('El horario de atencion es de 13 a 22 horas')
  }
  return true
}

const checkMonthValidations = (res, {req}) => {
  const month = req.body.month
  if (month <1 || month > 12) {
    throw new Error('Por favor ingrese un mes de enero a diciembre en numeros (1 al 12)')
  }
  if (month < calendar.getMonth() +1) {
   throw new Error('El mes que estas ingresando ya paso'); 
  }
  return true
}

const checkEditYearValidations = (res, {req}) => {
  const year = req.body.year
  if (year < calendar.getFullYear()) {
    throw new Error('El año que estas ingresando ya paso')
  }
  if (year > calendar.getFullYear()) {
    throw new Error('No se puede reservar por mas de 2 años')
  }
  return true
}

module.exports = {
  checkEmailExistValidaton,
  isValidId,
  checkMaxYearValidation,
  checkMinYearValidation,
  checkEditBookingValidation,
  checkGuestsValidations,
  checkHourValidations,
  checkMonthValidations,
  checkEditYearValidations
};
