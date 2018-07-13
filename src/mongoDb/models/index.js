import citySchema from '../schemas/citySchema';
import productSchema from '../schemas/productSchema';
import userSchema from '../schemas/userSchema';

const modelsBuilder = (mongoose) => {
  const City = mongoose.model('City', citySchema, 'Cities');
  const Product = mongoose.model('Product', productSchema, 'Products');
  const User = mongoose.model('User', userSchema, 'Users');

  return {
    City,
    Product,
    User
  };
};

export default modelsBuilder;
