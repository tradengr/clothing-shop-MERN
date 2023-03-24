const userRouter = require('express').Router();

const { httpGetUser } = require('./user.controller');

userRouter.get('/', httpGetUser);

module.exports = userRouter;