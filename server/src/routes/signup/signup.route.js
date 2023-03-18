const express = require('express');

const { httpSubmitSignup } = require('./signup.controller');

const signupRouter = express.Router();

signupRouter.post('/', httpSubmitSignup);

module.exports = signupRouter;