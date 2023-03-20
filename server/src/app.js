const express = require('express');
// const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
// const cookieSession = require('cookie-session');
const session = require('express-session');
// const { Strategy } = require('passport-google-oauth20');
// require('dotenv').config();

const path = require('path');

const { passportConfig } = require('./utils/passport/passport.utils');
// const usersModel = require('./models/users.mongo');
const authRouter = require('./routes/auth/auth.router');
const signupRouter = require('./routes/signup/signup.route');
// const signinRouter = require('./routes/signin/signin.router');

const app = express();

passportConfig(passport);

// const googleConfig = {
//   clientID: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   callbackURL: process.env.CALLBACK_URL
// }

// async function verify(accessToken, refreshToken, profile, done) {
//   const email = profile.emails[0].value;
//   const displayname = profile.displayName;

//   await usersModel.findOneAndUpdate({
//     email: email
//   }, {
//     displayName: displayname,
//     email: email
//   }, {
//     upsert: true
//   });

//   done(null, profile);
// }

// passport.use(new Strategy(googleConfig, verify))

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
// app.use(cookieSession({
//   name: 'session',
//   keys: [ process.env.COOKIE_KEY1, process.env.COOKIE_KEY2 ], 
//   maxAge: 1000 * 60 * 60 * 24
// }))
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

app.post('/signin', (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.status(401).send({ success : false, message : 'Authentication failed' });
    }
    req.login(user, (err) => {
      if(err){
        return next(err);
      }
      return res.send({ success : true, message : 'authentication succeeded' });        
    });
  })(req, res, next);
});

// app.post('/signin', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/signin',
// }));


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