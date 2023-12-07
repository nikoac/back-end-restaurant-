const { Router } = require('express');
const { getAllUsers, createUser, getUserById, editUser, deleteUser, checkEmailExist } = require('../controllers/users.controllers');
const route = Router();

route.get('/', getAllUsers);

route.get('/byId/:id', getUserById);

route.get('/checkEmailExist', checkEmailExist)

route.post('/create', createUser);

route.patch('/edit/:id', editUser);

route.delete('/delete/:id', deleteUser);

module.exports = route;