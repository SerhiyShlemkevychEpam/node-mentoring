const productSchema = {
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  reviews: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  options: [{
    color: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    }
  }]
};

export default productSchema;
