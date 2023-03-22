const bcrypt = require('bcryptjs');

const usersModel = require('./users.mongo');

async function createUser(user) {
  const { displayName, email, password } = user;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
  
    return await usersModel.create({
      displayName: displayName,
      email: email,
      password: hashedPassword
    });
  } catch (err) {
    console.error(err);
  }
}

async function submitSignup(user) {
  const userEmail = await usersModel.findOne({
    email: user.email
  })
  if (userEmail) return;

  return await createUser(user);
}

module.exports = {
  submitSignup
}