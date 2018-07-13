const productsData = [
  {
    id: 1,
    name: 'Supreme T-Shirt',
    brand: 'Supreme',
    reviews: 13,
    price: 99.99,
    options: [
      { color: 'blue' },
      { size: 'XL' }
    ]
  }
];

const throwError = (msg, statusCode) => {
  const err = new Error(msg);
  err.statusCode = statusCode;
  throw err;
};

const getAllProducts = () => productsData;

const getProductById = id =>
  productsData.find(product => product.id === parseInt(id));

const getProductReviewById = id => getProductById(id);

const addProduct = (product) => {
  const result = getProductById(product.id);
  if (result) {
    throwError('Already exists', 400);
  } else {
    productsData.push(product);
  }
};

const updateProduct = (product) => {
  let updated = false;
  productsData.forEach((item, index) => {
    if (item.id === product.id) {
      productsData.splice(index, 1, product);
      updated = true;
    }
  });
  if (!updated) {
    throwError(`Does not exist product with id: ${product.id}`, 400);
  }
};

export default {
  getAllProducts,
  getProductById,
  getProductReviewById,
  addProduct,
  updateProduct
};
