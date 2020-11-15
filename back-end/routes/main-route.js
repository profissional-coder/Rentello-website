const express = require("express");
const mainRouter = express.Router();
const { getAllUsers, register,login,deleteAccount,createPost } = require("../controllers/main-controller");

mainRouter.get("/user", getAllUsers);
mainRouter.post("/register", register);
mainRouter.post("/login",login);
mainRouter.delete("/delete/:user_id",deleteAccount);
mainRouter.post('/post/create', createPost);
module.exports = mainRouter;
