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
<<<<<<< Updated upstream
  await Booking.findByIdAndUpdate(id, payload, options)
=======
  return await Booking.findByIdAndUpdate(id, payload, options)
>>>>>>> Stashed changes
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