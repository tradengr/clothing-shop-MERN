const { getCategories } = require('../../models/categories/categories.model');

async function httpGetCategories(req, res) {
  const categoryMap = await getCategories();
  return res.status(200).json(categoryMap);
}

module.exports = { httpGetCategories };