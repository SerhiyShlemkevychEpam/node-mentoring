const citySchema = {
  name: {
    type: String,
    validate: {
      validator: v => v.charAt(0) === v.charAt(0).toUpperCase(),
      message: '{VALUE} must begin from uppercase!'
    },
    required: true
  },
  country: {
    type: String,
    required: true
  },
  capital: {
    type: String,
    default: false
  },
  location: {
    lat: {
      type: Number,
      required: true
    },
    long: {
      type: Number,
      required: true
    }
  }
};

export default citySchema;
