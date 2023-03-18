const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
require('dotenv').config();

const path = require('path');

const usersModel = require('./models/users.mongo');
const authRouter = require('./routes/auth/auth.router');
const signupRouter = require('./routes/signup/signup.route');

const app = express();

const googleConfig = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
}

async function verify(accessToken, refreshToken, profile, done) {
  const email = profile.emails[0].value;
  const displayname = profile.displayName;

  await usersModel.findOneAndUpdate({
    email: email
  }, {
    displayName: displayname,
    email: email
  }, {
    upsert: true
  });

  done(null, profile);
}

passport.use(new Strategy(googleConfig, verify))

app.use(helmet());
app.use(passport.initialize());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// Middleware that checks if user is authenticated before req route
function checkLoggedIn(req, res, next) {
  const isLoggedIn = true; //TODO
  if (!isLoggedIn) {
    return res.status(401).json({
      error: 'Must log in to continue'
    });
  }
  next();
}

app.use('/auth', authRouter);
app.use('/signup', signupRouter);

app.get('/*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;