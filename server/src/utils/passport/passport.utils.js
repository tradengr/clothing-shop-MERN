const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcryptjs');
require('dotenv').config();

const usersModel = require('../../models/users/users.mongo');

function passportConfig(passport) {
  const googleConfig = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  }
  
  async function verifyLocal(email, password, done) {
    try {
      const user = await usersModel.findOne({ email: email });
      if (!user) return done(null, false, { message: 'Incorrect username or password' });
      const result = bcrypt.compare(password, user.password);
      if (!result) return done(null, false, { message: 'Incorrect username or password' });
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }

  async function verifyGoogle(accessToken, refreshToken, profile, done) {
    const email = profile.emails[0].value;
    const displayname = profile.displayName;
    const googleId = profile.id;
    try {
      const currentUser = await usersModel.findOneAndUpdate(
        { email: email }, 
        { displayName: displayname,
          email: email,
        }, 
        { upsert: true }
      );
      // done(null, profile);
      done(null, currentUser);
    } catch (err) {
      done(err);
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'email' }, verifyLocal));
  passport.use(new GoogleStrategy(googleConfig, verifyGoogle));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async(id, done) => {
    try {
      const user = await usersModel.findById(id);
      const basicUserInfo = {
        displayName: user.displayName,
        email: user.email,
      }
      done(null, basicUserInfo);
    } catch (err) {
      done(err);
    }
  });
}

module.exports = { passportConfig };