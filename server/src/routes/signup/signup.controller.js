const { submitSignup } = require('../../models/users.model');

async function httpSubmitSignup(req, res) {
  const user = req.body;
  const { displayName, email, password } = user;

  if (!displayName || !email || !password) {
    return res.status(400).json({
      error: 'Incomplete User Data'
    })
  }

  const isUserCreated = await submitSignup(user);
  if (!isUserCreated) {
    return res.status(400).json({
      error: 'User already exists'
    })
  }
  
  return res.status(201).json({
    ok: 'User was registered successfully'
  });
}

module.exports = {
  httpSubmitSignup
}