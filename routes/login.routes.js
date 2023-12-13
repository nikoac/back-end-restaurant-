const { Router } = require('express');
const { login } = require('../controllers/login.controllers');
const { body } = require('express-validator');
const { checkEmailExistValidaton } = require('../helpers/validation');
const { postLoginValidations } = require('../validations/login.validations');

const route = Router()

route.post('/',postLoginValidations, login);

module.exports = route