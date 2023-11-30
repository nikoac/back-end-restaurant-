const Booking = require('../models/booking.model');

const createBookings = async (req, res) => {
    try {
        const payload = req.body;
        const newBooking = new Booking(payload);
        await newBooking.save();
        return res.status(201).json('Reserva añadida');
    } catch (error) {
        res.status(500).json('Ocurrio un error')
    }
}

const editBookings = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const EditedBooking = await Booking.findByIdAndUpdate(id, payload)
        if(!EditedBooking) {
            return res.status(404).json('Reserva no encontrada')
        }
        res.status(200).json('Reserva editada con Exito')
    } catch (error) {
        res.status(500).json('Ocurrio un error')
    }
}
const deleteBookings = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBooking = await Booking.findByIdAndDelete(id)
        if(!deleteBooking) {
            return res.status(404).json('Reserva no encontrada')
        }
        return res.status(200).json('Se Elimino la reserva con Exito')
    } catch (error) {
        res.status(500).json('Ocurrio un Error')
    }
}
const getBookings = async (req, res) => {
    try {
        const allBookings = await Booking.find({})
        res.status(200).json(allBookings)
    } catch (error) {
        res.status(500).json('Ocurrio un Error')
    }
}
module.exports = {
    createBookings,
    getBookings,
    editBookings,
    deleteBookings
}