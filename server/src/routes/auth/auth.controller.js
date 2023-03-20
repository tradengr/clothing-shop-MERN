const passport = require('passport');

function httpSubmitSignin(req, res, next) {
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
}

function httpGetLogout(req, res) {

}

module.exports = {
  httpSubmitSignin,
  httpGetLogout
}