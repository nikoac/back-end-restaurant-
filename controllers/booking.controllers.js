const { validateFields } = require('../helpers/utils');
const Booking = require('../models/booking.model');
const { options } = require('../routes/booking.routes');
const { getAllBookingsService, createBookingsService, editBookingsService, deleteBookingService, getBookingsByIdService, checkUserBookingService } = require('../services/booking.services');
const { getUserByEmailService } = require('../services/user.services');


const getBookings = async (req, res) => {
    try {
        const allBookings = await getAllBookingsService()
        res.status(200).json(allBookings)
    } catch (error) {
        res.status(500).json('Ocurrio un Error')
    }
}

const getBookingsById = async (req, res) => {
    try {
        const isValid = validateFields(req, res) 
        if (!isValid) return 
        const { id } = req.params
        const response = await getBookingsByIdService(id)
        if (!response) {
            return res.status(404).json("Reserva no encontrada")
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }

} 

// controlador que busca la reserva por email
const getBookingByEmail = async (req, res) => {
    try {
        const {email} = req.query;
        const response = await checkUserBookingService(email)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const createBookings = async (req, res) => {
    try {
        const isValid = validateFields(req, res) 
        if (!isValid) return 
        const payload = req.body;
        const response = await createBookingsService(payload)
        console.log(response);
        res.status(201).json('Reserva añadida');
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const checkUserBooking = async (req, res) => {
    try {
        const { email } = req.query
        console.log(email);
         const response = await checkUserBookingService(email);
         console.log(response);
        //  res.status(200).json( {isReserved: response ? true : false})
        if (response) {
            return res.status(200).json(true);    
        };
        res.status(200).json(false);
    } catch (error) {
        console.log(error, 'soy el error');
        res.status(500).json(error.message)
    }
}

const editBookings = async (req, res) => {
    try {
        const isValid = validateFields(req, res) 
        if (!isValid) return 
        const { id } = req.params;
        console.log(id);
        const payload = req.body;
        console.log(payload);
        const EditedBooking = await editBookingsService(id, payload)
        if(!EditedBooking) {
            return res.status(404).json('Reserva no encontrada')
        }
        res.status(200).json(EditedBooking)
    } catch (error) {
        res.status(500).json(error)
    }
}
const deleteBookings = async (req, res) => {
    try {
        const isValid = validateFields(req, res) 
        if (!isValid) return 
        const { id } = req.params;
        const deleteBooking = await deleteBookingService(id)
        if(!deleteBooking) {
            return res.status(404).json('Reserva no encontrada')
        }
        return res.status(200).json('Se Elimino la reserva con Exito')
    } catch (error) {
        res.status(500).json('Ocurrio un Error')
    }
}
module.exports = {
    getBookings,
    editBookings,
    deleteBookings,
    getBookingsById,
    createBookings,
    checkUserBooking,
    getBookingByEmail
}