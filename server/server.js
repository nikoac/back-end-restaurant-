const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 8000;
require ('dotenv').config();
require('../database/dbconnection');

// middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({}));

// routes

const bookingRoutes = require('../routes/booking.routes');
const userRoutes = require('../routes/users.routes')
const loginRoutes = require('../routes/login.routes');
// useRoutes

app.use('/', express.static('/api'))
app.use('/bookings', bookingRoutes);
app.use('/users', userRoutes);
app.use('/login', loginRoutes)

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`)
})
