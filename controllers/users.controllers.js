const { validationResult } = require('express-validator');
const { hasingPassword } = require('../helpers/hashPassword');
const User = require('../models/user.model');
const { getAllUsersService, getUserByIdService, editUserService, createUserService, deleteUserService, getUserByEmailService } = require('../services/user.services');
const bcrypt = require ('bcrypt');
const { isObjectIdOrHexString } = require('mongoose');
const { validateFields } = require('../helpers/utils');

const getAllUsers = async (req, res) => {
    try {
        const response = await getAllUsersService();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error)
    }
}

const getUserById = async (req, res) => {
    try {
        const isValid = validateFields(req, res) 
        if (!isValid) return 
        const { id } = req.params;
        const response = await getUserByIdService(id);
        if (!response)
            return res.status(404).json('No se encontró el usuario');
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error)
    }
}

const checkEmailExist = async (req, res) => {
    try {
      const isValid = validateFields(req, res) 
      if (!isValid) return 

      const { email } = req.query;
      const response = await getUserByEmailService(email);
      if (response) {
        return res.status(200).json(false);
      }
      res.status(200).json(true);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  

const createUser = async (req, res) => {
    try {
        const isValid = validateFields(req, res) 
        if (!isValid) return 
        const payload = req.body;
        const userWithPassHash = await hasingPassword(payload)
        const response = createUserService(userWithPassHash);
        res.status(201).json('Usuario creado con éxito');
    } catch (error) {
        res.status(500).json(error)
    }
}

const editUser = async (req, res) => {
    try {
        const isValid = validateFields(req, res) 
        if (!isValid) return 
        const { id } = req.params;
        const payload = req.body;
        const response = await editUserService(id, payload);
        if (!response)
            return res.status(404).json('No se encontró el usuario');
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const isValid = validateFields(req, res) 
        if (!isValid) return 
        const { id } = req.params;
        const response = await deleteUserService(id);
        if (!response)
            return res.status(404).json('No se encontró el usuario');
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    editUser,
    deleteUser,
    checkEmailExist
};



