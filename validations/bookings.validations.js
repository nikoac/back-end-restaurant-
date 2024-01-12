const { body, param } = require("express-validator");
const { isValidId, checkEditBookingValidation, checkGuestsValidations, checkHourValidations, checkMonthValidations, checkEditYearValidations } = require("../helpers/validation");


const validateDay = body('day')
.custom(checkEditBookingValidation)
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

const validateYear = body('year')
.not()
.isEmpty()
.withMessage('El campo year es obligatorio')

const validateEditGuestsBookings = body('guests')
.custom(checkGuestsValidations)

const validateEditHourBookings = body('hour')
.custom(checkHourValidations)

const validateEditMonthBookings = body ('month')
.custom(checkMonthValidations)

const validateEditDayBookings = body('day')
.custom(checkEditBookingValidation)

const ValidateEditYearBookings = body('year')
.custom(checkEditYearValidations)

//getIdBookingsValidations
const getIdBookingsValidations = [
  validateId
]

//postValidations
const createBookingsValidations = [
  validateDay,
  validateMonth,
  validateHour,
  validateGuests,
  validateYear
  
]

//patchValidations 
const editBookingsValidations = [
  validateId,
  validateEditGuestsBookings,
  validateEditHourBookings,
  validateEditMonthBookings,
  validateEditDayBookings,
  ValidateEditYearBookings
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