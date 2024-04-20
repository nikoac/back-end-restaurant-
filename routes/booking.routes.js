const { Router } = require('express')
const { getBookings, editBookings, createBookings, deleteBookings, getBookingsById } = require('../controllers/booking.controllers')
const { createBookingsValidations, getIdBookingsValidations, editBookingsValidations, deleteBookingsValidations, } = require('../validations/bookings.validations')
const { isValidId } = require('../helpers/validation')
<<<<<<< Updated upstream
const { validateRoll, validateToken } = require('../middlewares/auth')
const { checkEmailExist } = require('../controllers/users.controllers')
const routeB = Router();
=======
const { checkEmailExist } = require('../controllers/users.controllers')
const { validateToken } = require('../middlewares/auth')
const routeB = Router()
>>>>>>> Stashed changes

routeB.get('/',validateToken, validateRoll, getBookings)

routeB.get("/byId/:id", ...getIdBookingsValidations, getBookingsById)

routeB.get('/checkEmailExist', checkEmailExist)

<<<<<<< Updated upstream
routeB.post('/create',  createBookings) 
=======
routeB.post('/create', ...createBookingsValidations, validateToken, createBookings)
>>>>>>> Stashed changes

routeB.patch('/edit/:id', ...editBookingsValidations, editBookings)

routeB.delete('/delete/:id', ...deleteBookingsValidations, deleteBookings)

module.exports = routeB
