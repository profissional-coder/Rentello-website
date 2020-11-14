const express = require('express');
const {createPost,getAllpost,getAllUsers,PostAndUsers}=require('../controllers/main-controller')
const mainRouter = express.Router();



mainRouter.get('/post/get',getAllpost);
mainRouter.post('/post/create', createPost);
mainRouter.get('/user/get', getAllUsers);
mainRouter.post('/userAndPost', PostAndUsers);

module.exports = mainRouter;