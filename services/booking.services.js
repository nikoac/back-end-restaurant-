const Booking = require ("../models/booking.model")

const getAllBookingsService = async () =>{
  return await Booking.find({})
}

const getBookingsByIdService = async (id) => {
  return await Booking.findById(id)
}

const createBookingsService = async (payload) => {
  const newBooking =  new Booking(payload);
  await newBooking.save();
}

const editBookingsService = async (id, payload) => {
  const options = {
    new: true,
  }
  await Booking.findByIdAndUpdate(id, payload, options)
}

const deleteBookingService = async (id) => {
  return await Booking.findByIdAndDelete(id)
}

module.exports ={
  getAllBookingsService,
  createBookingsService,
  editBookingsService,
  deleteBookingService,
  getBookingsByIdService
}