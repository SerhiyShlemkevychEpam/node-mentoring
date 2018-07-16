module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Users',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING
      },
      pwd: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: 'Users'
    }
  );
  return Product;
};
