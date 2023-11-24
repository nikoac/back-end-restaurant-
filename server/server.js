const express = require('express');
const app = express ();
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 8000;
require ('dotenv').config();

// middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({}));

// useRoutes

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})