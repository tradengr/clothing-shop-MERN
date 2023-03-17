const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connection.once('open', () => { 
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function connectMongo() {
  await mongoose.connect(process.env.MONGO_URL);
}

module.exports = { connectMongo };