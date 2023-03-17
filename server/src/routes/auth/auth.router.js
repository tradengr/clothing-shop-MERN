const express = require('express');
const passport = require('passport');

const {
  httpGetGoogleCallback,
  httpGetLogout
} = require('./auth.controller');

const authRouter = express.Router();

const passportAuthenticateSignIn = passport.authenticate('google', {
  scope: ['email', 'profile']
});

const passportAuthenticateCallback = passport.authenticate('google', {
  failureRedirect: '/signin',
  successRedirect: '/',
  session: false
});

authRouter.get('/google', passportAuthenticateSignIn);

authRouter.get('/google/callback', passportAuthenticateCallback, httpGetGoogleCallback);

authRouter.get('/logout', httpGetLogout);

module.exports = authRouter;