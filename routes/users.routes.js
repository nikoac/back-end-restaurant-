const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  editUser,
  deleteUser,
  checkEmailExist,
} = require("../controllers/users.controllers");
const { param, query } = require("express-validator");
const { isValidId } = require("../helpers/validation");
const { createUserValidations, getUserEmailValidations, getUserIdValidations, editUserValidations, deleteUserValidations } = require("../validations/user.validations");

const route = Router();

route.get("/", getAllUsers);

route.get("/byId/:id", ...getUserIdValidations, getUserById);

route.get("/checkEmailExist", ...getUserEmailValidations,checkEmailExist);

route.post("/create", ...createUserValidations, createUser);

route.patch("/edit/:id", ...editUserValidations ,editUser);

route.delete("/delete/:id", ...deleteUserValidations, deleteUser);

module.exports = route;
