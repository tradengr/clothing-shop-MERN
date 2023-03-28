const signupRouter = require('express').Router();

const { httpSubmitSignup } = require('./signup.controller');

signupRouter.post('/', httpSubmitSignup);

module.exports = signupRouter;