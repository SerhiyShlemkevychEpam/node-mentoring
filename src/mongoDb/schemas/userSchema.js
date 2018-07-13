const citySchema = {
  username: {
    type: String,
    required: true
  },
  pwd: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: false
  }
};

export default citySchema;
