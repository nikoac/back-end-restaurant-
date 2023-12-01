const { Router } = require('express');
const { getAllUsers, createUser, getUserById, editUser, deleteUser } = require('../controllers/users.controllers');
const route = Router();

route.get('/', getAllUsers);

route.get('(byId/:id', getUserById);

route.patch('/edit/:id', editUser);

route.delete('/delete/:id', deleteUser);

route.post('/create', createUser);

module.exports = route;