const { response } = require('express');
const { passMatch } = require("../helpers/hashPassword");
const { getUserByEmailService } = require("../services/user.services");
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const response = await getUserByEmailService(email)
    if (!response) {
      return res.status(200).json('El email o el password son incorrectos');
    }
    const passwordMatchResult = await passMatch(password, response.password);
    if (!passwordMatchResult) {
      return res.status(200).json('El email o el password son incorrectos')
    }
    const payload = {
      name: response.name,
      lastName: response.lastName,
      email: response.email,
      role: response.role,
      _id: response._id
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY,{
      expiresIn: 1,
    });

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports ={
  login
}