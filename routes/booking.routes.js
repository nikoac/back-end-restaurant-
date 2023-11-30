const { Router } = require('express')
const { getBookings, createBookings, editBookings, deleteBookings } = require('../controllers/booking.controllers')
const route = Router()

route.get('/', getBookings)

route.post('/create', createBookings)

route.patch('/edit/:id', editBookings)

route.delete('/delete/:id', deleteBookings)

module.exports = route