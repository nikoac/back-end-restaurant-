const { isObjectIdOrHexString } = require("mongoose");
const { getUserByEmailService } = require("../services/user.services");
const { body } = require("express-validator");

const checkEmailExistValidaton = async (email) => {
  const response = await getUserByEmailService(email);
  if (response)
    throw new Error(`El email ${email}, ya se encuentra registrado`);
  return false;
};

const isValidId = async (id) => {
  if (!isObjectIdOrHexString(id)) {
    throw new Error("El id es inválido");
  }
  return false;
};



module.exports = {
  checkEmailExistValidaton,
  isValidId,
  
};
