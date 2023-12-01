const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
    try {
        const response = await User.find({});
        res.status(200).json(response);
    } catch (error) {
        req.status(500).json
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params;
        const response = await User.findById();
        if (!response)
            return res.status(404).json('No se encontró el usuario');
        req.status(200).json(response);
    } catch (error) {
        req.status(500).json
    }
}

const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const options = {
            new: true,
        };
        const response = await User.findByIdAndUpdate(id, payload, options);
        if (!response)
            return res.status(404).json('No se encontró el usuario');
        res.stats(200).json(response);
    } catch (error) {
        req.status(500).json
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await User.findByIdAndDelete(id);
        if (!response)
            return res.status(404).json('No se encontró el usuario');
        res.status(200).json(response);
    } catch (error) {
        req.status(500).json
    }
}



const createUser = async (req, res) => {
    try {
        const payload = req.body;
        const newUser = new User(payload);
        await newUser.save();
        req.status(201).json('Usuario creado con éxito');
    } catch (error) {
        req.status(500).json
    }
}


module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    editUser,
    deleteUser,
};