const express = require('express');
// const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const path = require('path');

const { passportConfig } = require('./utils/passport/passport.utils');
const authRouter = require('./routes/auth/auth.router');
const signupRouter = require('./routes/signup/signup.route');
const app = express();

// passportConfig(passport);

// function authenticate(req, res, next) {
//   if (!req.isAuthenticated)
//     return res.redirect('/signin');
//   next();
// }
// function reAuthenticate(req, res, next) {
//   if (req.isAuthenticated)
//     return res.redirect('/');
//   next();
// }

// app.use(helmet());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);
// app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/auth', authRouter);
app.use('/signup', signupRouter);

app.get('/user', (req, res) => {
  return res.status(200).json(req.user);
})

app.delete('/signout', (req, res, next) => {
  req.logOut(err => {
    if (err) return next(err);
    res.status(200).json({ ok: 'Success' });
  });
})

// app.get('/*', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });

module.exports = app;