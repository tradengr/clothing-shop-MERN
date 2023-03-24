const signoutRouter = require('express').Router();

const { httpSignoutUser } = require('./signout.controller');

signoutRouter.delete('/', httpSignoutUser);

module.exports = signoutRouter;