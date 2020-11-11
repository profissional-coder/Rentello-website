const express = require('express');
const mainRouter = express.Router();
const {getAllUsers}=require("../controllers/main-controller");



mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});
mainRouter.get("/user",getAllUsers)
module.exports = mainRouter;