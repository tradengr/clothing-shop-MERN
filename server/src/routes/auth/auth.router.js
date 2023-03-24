const authRouter = require('express').Router();
const passport = require('passport');

const {
  httpSubmitSignin,
  passportAuthenticateSignIn,
  passportAuthenticateCallback,
} = require('./auth.controller');

authRouter.post('/local', passport.authenticate('local'), httpSubmitSignin);
authRouter.get('/google', passportAuthenticateSignIn);
authRouter.get('/google/callback', passportAuthenticateCallback);

module.exports = authRouter;