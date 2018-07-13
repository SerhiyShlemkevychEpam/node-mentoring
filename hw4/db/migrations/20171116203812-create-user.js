module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      pwd: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    }),

  down: queryInterface =>
    queryInterface.dropTable('Users')
};
