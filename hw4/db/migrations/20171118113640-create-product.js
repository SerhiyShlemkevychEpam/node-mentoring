module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      reviews: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DOUBLE
      },
      options: {
        type: Sequelize.JSON
      }
    }),

  down: queryInterface =>
    queryInterface.dropTable('Products')
};
