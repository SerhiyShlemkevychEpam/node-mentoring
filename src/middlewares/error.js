export default (err, req, res, next) => {
  const { statusCode } = err;

  if (statusCode <= 500) {
    res.status(statusCode).send({ statusCode, description: err.message });
  }
  res.status(500).send({ statusCode: 500, description: err.message });
};
