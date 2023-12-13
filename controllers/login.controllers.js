const { passMatch } = require("../helpers/hashPassword");
const { validateFields } = require("../helpers/utils");
const { getUserByEmailService } = require("../services/user.services");


const login = async (req, res) => {
  try {
    const isValid = validateFields(req, res) 
        if (!isValid) return ;
    const {email, password} = req.body;
    const response = await getUserByEmailService(email)
    if (!response) {
      return res.status(200).json('El email o el password son incorrectos');
    }
    const passwordMatchResult = await passMatch(password, response.password);
    if (!passwordMatchResult) {
      return res.status(200).json('El email o el password son incorrectos')
    }
    const user = {
      name: response.name,
      lastName: response.lastName,
      email: response.email,
      role: response.role,
      _id: response._id
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports ={
  login
}