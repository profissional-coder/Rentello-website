const express = require("express");
const mainRouter = express.Router();
const { getAllUsers, register,login,deleteAccount } = require("../controllers/main-controller");
const { getAllpost, createPost,deleteALL,getpost ,deletePost,updatePost} = require("../controllers/main-createpost");


mainRouter.post("/posts/create", createPost);
mainRouter.get("/posts", getAllpost);
mainRouter.get("/post/:name",getpost);
mainRouter.delete("/posts/delete-all",deleteALL);
mainRouter.delete("/delete/:post_id",deletePost);
mainRouter.put("/posts/update",updatePost);

/************************************************************ */
mainRouter.get("/user", getAllUsers);
mainRouter.post("/register", register);
mainRouter.post("/login",login);
mainRouter.delete("/delete/:user_id",deleteAccount);
module.exports = mainRouter;
