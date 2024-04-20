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

<<<<<<< Updated upstream
route.get("/", validateToken, validateRoll, getAllUsers);
=======
route.get("/", validateToken, getAllUsers);
>>>>>>> Stashed changes

route.get("/byId/:id", getUserById);

route.get("/checkEmailExist",checkEmailExist);

route.post("/create", ...createUserValidations, createUser);

<<<<<<< Updated upstream
route.patch("/edit/:id", ...editUserValidations, validateToken, editUser);

route.delete("/delete/:id", /*...deleteUserValidations,*/ validateToken, validateRoll, deleteUser);
=======
route.patch("/edit/:id", validateToken, validateRoll, editUser);
>>>>>>> Stashed changes

route.delete("/delete/:id",...deleteUserValidations, validateToken, validateRoll, deleteUser);
  
module.exports = route;
