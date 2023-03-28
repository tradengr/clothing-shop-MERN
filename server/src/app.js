const express = require('express');
// const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const path = require('path');

const { passportConfig } = require('./utils/passport/passport.utils');
const authRouter = require('./routes/auth/auth.router');
const signupRouter = require('./routes/signup/signup.route');
const categoriesRouter = require('./routes/categories/categories.router');
const userRouter = require('./routes/user/user.router');
const signoutRouter = require('./routes/signout/signout.router');

const app = express();

// Middlewares
// app.use(helmet());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.use('/signup', signupRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/signout', signoutRouter);
app.use('/categories', categoriesRouter);

app.get('/*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;