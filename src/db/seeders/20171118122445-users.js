const productsSeedData = require('./data/users');

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Users', productsSeedData, {}),

  down: queryInterface =>
    queryInterface.bulkDelete('Users', null, {})
};
