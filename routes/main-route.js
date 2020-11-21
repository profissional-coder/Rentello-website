const express = require("express");
const mainRouter = express.Router();
const {
  getAllUsers,
  register,
  login,
  deleteAccount,
  createPost,
  updateUser,
  PostAndUsers,
  getLastPost,
  getAllpost,
  getpost,
  createOrder,
  getOrders,
  deleteOrder,
  getUserPost,
  deletePost,
  updatePost,
  getUserById,
} = require("../controllers/main-controller");

mainRouter.get("/test", (req, res) => {
  res.json("Hello World Server");
});

mainRouter.post("/userAndPost", PostAndUsers);
mainRouter.get("/user", getAllUsers);
mainRouter.post("/register", register);
mainRouter.post("/login", login);
mainRouter.delete("/delete/:user_id", deleteAccount);
mainRouter.post("/post/create", createPost);
mainRouter.put("/users/update", updateUser);
mainRouter.get("/getlastpost", getLastPost);
mainRouter.get("/getlastpost", getLastPost);
mainRouter.get("/posts", getAllpost);
mainRouter.get("/post/:post_id", getpost);
mainRouter.post("/orders/create", createOrder);
mainRouter.get("/orders/:user_id", getOrders);

// ************************************************************

mainRouter.delete("/orders/:order_id", deleteOrder);
mainRouter.get("/posts/:user_id", getUserPost);
mainRouter.delete("/delete/:post_id", deletePost);
mainRouter.put("/posts/update", updatePost);
mainRouter.get("/user/:user_id", getUserById);

module.exports = mainRouter;
