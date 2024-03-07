const { Router } = require('express')
const { getBookings, createBookings, editBookings, deleteBookings, getBookingsById } = require('../controllers/booking.controllers')
const { body, query, param } = require('express-validator')
const { createBookingsValidations, getIdBookingsValidations, editBookingsValidations, deleteBookingsValidations, } = require('../validations/bookings.validations')
const { isValidId } = require('../helpers/validation')
const { validateRoll, validateToken } = require('../middlewares/auth')
const routeB = Router()

routeB.get('/', validateRoll,  getBookings)

routeB.get("/byId/:id", ...getIdBookingsValidations, getBookingsById)

routeB.post('/create', ...createBookingsValidations, validateToken, createBookings)

routeB.patch('/edit/:id', ...editBookingsValidations, editBookings)

routeB.delete('/delete/:id', ...deleteBookingsValidations, deleteBookings)

module.exports = routeB
