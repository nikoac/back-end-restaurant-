const { Router } = require('express');
const route = Router();

route.get('/', (req, res) => {
    try {
        res.status(200).json('these are the users...[]')         
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = route;