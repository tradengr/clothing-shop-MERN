const express = require('express');
const passport = require('passport');

const {
  httpSubmitSignin,
  httpGetLogout
} = require('./auth.controller');

const authRouter = express.Router();

const passportAuthenticateSignIn = passport.authenticate('google', {
  scope: ['email', 'profile']
});

const passportAuthenticateCallback = passport.authenticate('google', {
  failureRedirect: 'http://localhost:3000/signin',
  successRedirect: 'http://localhost:3000/',
  session: true,
});

authRouter.get('/google', passportAuthenticateSignIn);

authRouter.get('/google/callback', passportAuthenticateCallback, (req, res) => {

});
// authRouter.get('/google/callback', passportAuthenticateCallback, httpGetGoogleCallback);

authRouter.post('/local', passport.authenticate('local'), httpSubmitSignin);

authRouter.get('/logout', httpGetLogout);

module.exports = authRouter;