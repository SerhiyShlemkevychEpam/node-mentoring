import db from '../db';

const getAllProducts = () => db.Products.findAll();

const getProductById = id => db.Products.findById(id);

const getProductReviewById = id => db.Products.findById(id);

const addProduct = product => db.Products.create(product);

const updateProduct = (id, product) => db.Products.update(
  product,
  {
    where: {
      id
    }
  }
);


export default {
  getAllProducts,
  getProductById,
  getProductReviewById,
  addProduct,
  updateProduct
};
