const passport = require('passport');

function httpSubmitSignin(req, res) {
  // return res.status(200).json({ ok: 'Successfully Authenticated' });
  return res.status(200).json(req.user);
}

const passportAuthenticateSignIn = passport.authenticate('google', {
  scope: ['email', 'profile']
});

const passportAuthenticateCallback = passport.authenticate('google', {
  failureRedirect: 'http://localhost:3000/signin',
  successRedirect: 'http://localhost:3000/',
  session: true,
});

module.exports = {
  httpSubmitSignin,
  passportAuthenticateSignIn,
  passportAuthenticateCallback,
}