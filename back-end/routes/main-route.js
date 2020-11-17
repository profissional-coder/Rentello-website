const express = require("express");
const mainRouter = express.Router();
const { getAllUsers,getUserById, register,login,deleteAccount,updateUser } = require("../controllers/user-controller");
const { getAllpost, createPost,deleteALL,getpost ,deletePost,updatePost,createOrder,getOrders,
    deleteOrder} = require("../controllers/main-controller");

mainRouter.post("/posts/create", createPost);
mainRouter.get("/posts", getAllpost);
mainRouter.get("/post/:name",getpost);
mainRouter.delete("/posts/delete-all",deleteALL);
mainRouter.delete("/delete/:post_id",deletePost);
mainRouter.put("/posts/update",updatePost);
// ************************************************************
mainRouter.post("/orders/create", createOrder);
mainRouter.delete("/orders/:order_id",deleteOrder);
mainRouter.get("/orders", getOrders);


/*************************************************************/
mainRouter.get("/users", getAllUsers);
mainRouter.put("/users/update", updateUser); 
mainRouter.get("/user/:user_id", getUserById);
mainRouter.post("/register", register);
mainRouter.post("/login",login);
mainRouter.delete("/delete/:user_id",deleteAccount);
module.exports = mainRouter;