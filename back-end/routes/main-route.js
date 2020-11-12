const express = require('express');
const {createPost}=require('../controllers/main-controller')
const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});


mainRouter.post("/posts/create", createPost);


module.exports = mainRouter;