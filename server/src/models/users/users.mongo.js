const { Schema, model, Types } = require('mongoose');

const usersSchema = new Schema({
  googleId: {
    type: String,
    required: false
  },
  displayName: {
   type: String,
   required: true 
  },
  email: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
    required: true
  },
  password: {
    type: String,
    required: false
  }
});

module.exports = model('User', usersSchema);