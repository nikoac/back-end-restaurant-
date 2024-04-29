const { Router } = require('express')
const { getBookings, editBookings, createBookings, deleteBookings, getBookingsById, checkUserBooking } = require('../controllers/booking.controllers')
const { createBookingsValidations, getIdBookingsValidations, editBookingsValidations, deleteBookingsValidations, } = require('../validations/bookings.validations')
const { isValidId } = require('../helpers/validation')
const { validateRoll, validateToken } = require('../middlewares/auth')
const { checkEmailExist } = require('../controllers/users.controllers')
const routeB = Router();

routeB.get('/',validateToken, validateRoll, getBookings)

routeB.get("/byId/:id", ...getIdBookingsValidations, getBookingsById)

routeB.get('/checkEmailExist', checkEmailExist);

routeB.get('/checkUserBooking', checkUserBooking );

routeB.post('/create', ...createBookingsValidations, createBookings) 

routeB.patch('/edit/:id', ...editBookingsValidations, editBookings)

routeB.delete('/delete/:id', ...deleteBookingsValidations, deleteBookings)

module.exports = routeB
