const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  editUser,
  deleteUser,
  checkEmailExist,
} = require("../controllers/users.controllers");
const { 
  createUserValidations, 
  getUserEmailValidations, 
  getUserIdValidations, 
  editUserValidations, 
  deleteUserValidations } = require("../validations/user.validations");
const { validateToken, validateRoll } = require("../middlewares/auth");

const route = Router();

route.get("/", validateToken, validateRoll, getAllUsers);

route.get("/byId/:id", getUserById);

route.get("/checkEmailExist",checkEmailExist);

route.post("/create", ...createUserValidations, createUser);

route.patch("/edit/:id", ...editUserValidations, validateToken, editUser);

route.delete("/delete/:id", /*...deleteUserValidations,*/ validateToken, validateRoll, deleteUser);


  
module.exports = route;
