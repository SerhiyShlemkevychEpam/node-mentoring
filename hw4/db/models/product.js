module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Products',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      brand: {
        type: DataTypes.STRING
      },
      reviews: {
        type: DataTypes.INTEGER
      },
      price: {
        type: DataTypes.DOUBLE
      },
      options: {
        type: DataTypes.JSON
      }
    },
    {
      tableName: 'Products'
    }
  );
  return Product;
};
