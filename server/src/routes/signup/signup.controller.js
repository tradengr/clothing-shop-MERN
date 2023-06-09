const { submitSignup } = require('../../models/users/users.model');

async function httpSubmitSignup(req, res) {
  const user = req.body;
  const { displayName, email, password } = user;

  if (!displayName || !email || !password) {
    return res.status(400).json({
      error: 'Incomplete User Data'
    })
  }

  const userCreated = await submitSignup(user);
  if (!userCreated) return res.status(400).json({ error: 'User already exists' });
  // return res.status(201).json({ ok: 'User was registered successfully' });
  console.log(req.user);
  return res.status(201).json(req.user);
}

module.exports = {
  httpSubmitSignup
}