import express from 'express';
import products from '../models/products';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(products.getAllProducts());
});

router.get('/:id', (req, res) => {
  const product = products.getProductById(req.params.id);
  product
    ? res.send(product)
    : res.send('Oops, not found');
});

router.get('/:id/reviews', (req, res) => {
  const product = products.getProductReviewById(req.params.id);
  product
    ? res.send(`${product.name} has ${product.reviews} reviews`)
    : res.send('Oops, not found');
});

router.post('/', (req, res) => {
  products.addProduct(req.body);
  res.send(JSON.stringify(req.body));
});

router.put('/', (req, res) => {
  products.updateProduct(req.body);
  res.send(JSON.stringify(req.body));
});

export default router;
