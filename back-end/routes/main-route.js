
const express = require("express");
const mainRouter = express.Router();
const { getAllUsers, register,login,deleteAccount,createPost ,updateUser,
    PostAndUsers,getLastPost,getAllpost,getpost,createOrder,getOrders} = require("../controllers/main-controller");

mainRouter.post('/userAndPost', PostAndUsers);
mainRouter.get("/user", getAllUsers);
mainRouter.post("/register", register);
mainRouter.post("/login",login);
mainRouter.delete("/delete/:user_id",deleteAccount);
mainRouter.post('/post/create', createPost);
mainRouter.put("/users/update", updateUser);
mainRouter.get("/getlastpost",getLastPost)
mainRouter.get("/getlastpost",getLastPost)
mainRouter.get("/posts", getAllpost);
mainRouter.get("/post/:post_id",getpost);
mainRouter.post("/orders/create", createOrder);
mainRouter.get("/orders/:user_id", getOrders);

module.exports = mainRouter;
