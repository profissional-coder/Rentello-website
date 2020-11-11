const express = require("express");
const mainRouter = express.Router();
const { getAllUsers, addUser } = require("../controllers/main-controller");

mainRouter.get("/", (req, res) => {
  res.json("HELLO WORLD");
});

mainRouter.get("/user", getAllUsers);
mainRouter.get("/registar", addUser);
module.exports = mainRouter;
