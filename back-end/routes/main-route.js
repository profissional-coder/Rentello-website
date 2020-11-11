const express = require("express");
const mainRouter = express.Router();
const { getAllUsers, register,login } = require("../controllers/main-controller");

mainRouter.get("/", (req, res) => {
  res.json("HELLO WORLD");
});

mainRouter.get("/user", getAllUsers);
mainRouter.post("/register", register);
mainRouter.post("/login",login);

module.exports = mainRouter;
