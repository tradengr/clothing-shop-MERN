const usersModel = require('./users.mongo');

async function createUser(user) {
  const { displayName, email, password } = user;

  return await usersModel.create({
    displayName: displayName,
    email: email,
    password: password
  });
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