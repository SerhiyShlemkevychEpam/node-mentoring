const productsSeedData = require('./data/products');

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Products', productsSeedData, {}),

  down: queryInterface =>
    queryInterface.bulkDelete('Products', null, {})
};
