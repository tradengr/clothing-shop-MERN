const Category = require('./categories.mongo');

async function getCategories() {
  const categories = await Category.find({}, { _id: 0, __v: 0 });
  const categoryMap = categories.reduce((acc, collection) => {
    const { title, items } = collection;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
}

module.exports = { getCategories };