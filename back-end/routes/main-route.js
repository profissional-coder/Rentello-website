
const express = require('express');
const {createPost,getAllpost,PostAndUsers}=require('../controllers/main-controller')
const mainRouter = express.Router();
const { getAllUsers, register,login,deleteAccount } = require("../controllers/main-controller");



mainRouter.get('/post/get',getAllpost);
mainRouter.post('/post/create', createPost);
mainRouter.post('/userAndPost', PostAndUsers);

mainRouter.get("/user", getAllUsers);
mainRouter.post("/register", register);
mainRouter.post("/login",login);
mainRouter.delete("/delete/:user_id",deleteAccount);
module.exports = mainRouter;
