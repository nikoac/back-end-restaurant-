const { Router } = require('express')
const { getBookings, createBookings, editBookings, deleteBookings, getBookingsById } = require('../controllers/booking.controllers')
const routeB = Router()

routeB.get('/', getBookings)

routeB.get("/byId/:id", getBookingsById)

routeB.post('/create', createBookings)

routeB.patch('/edit/:id', editBookings)

routeB.delete('/delete/:id', deleteBookings)

module.exports = routeB
