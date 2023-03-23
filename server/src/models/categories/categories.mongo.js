const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
  id: Number,
  imageUrl: String,
  name: String,
  price: Number,
});

const categoriesSchema = new mongoose.Schema({
  title: String,
  items: [itemsSchema],
});

module.exports = mongoose.model('Category', categoriesSchema);