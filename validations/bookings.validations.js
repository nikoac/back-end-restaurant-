const { body, param } = require("express-validator");
const { isValidId } = require("../helpers/validation");


const validateDay = body('day')
.not()
.isEmpty()
.withMessage('El campo day es obligatorio')

const validateMonth = body('month')
.not()
.isEmpty()
.withMessage('El campo month es obligatorio')

const validateHour = body('hour')
.not()
.isEmpty()
.withMessage('El campo hour es obligatorio')

const validateGuests = body('guests')
.not()
.isEmpty()
.withMessage('El campo guests es obligatorio')

const validateId = param('id')
.custom(isValidId)


//getIdBookingsValidations
const getIdBookingsValidations = [
  validateId
]

//postValidations
const createBookingsValidations = [
  validateDay,
  validateMonth,
  validateHour,
  validateGuests
]

//patchValidations 
const editBookingsValidations = [
  validateId
]

//deleteValidations
const deleteBookingsValidations = [
  validateId
]

module.exports = {
  createBookingsValidations,
  getIdBookingsValidations,
  editBookingsValidations,
  deleteBookingsValidations
}