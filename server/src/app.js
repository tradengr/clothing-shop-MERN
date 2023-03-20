const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const path = require('path');

const { passportConfig } = require('./utils/passport/passport.utils');
const authRouter = require('./routes/auth/auth.router');
const signupRouter = require('./routes/signup/signup.route');
const app = express();

passportConfig(passport);

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

app.use(helmet());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/signup', signupRouter);

app.post('/signout', (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('http://localhost:8000/');
  });
})

// app.get('/*', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });

module.exports = app;