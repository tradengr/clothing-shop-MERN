const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
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
    default: new Date(),
    required: true
  }
});

module.exports = model('User', usersSchema);