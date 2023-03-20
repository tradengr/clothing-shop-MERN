const express = require('express');

const { httpSubmitSignin } = require('./signin.controller');

const signinRouter = express.Router();

signinRouter.post('/', httpSubmitSignin);

module.exports = signinRouter;
