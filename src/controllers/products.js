import express from 'express';
import products from '../models/products';

const router = express.Router();

router.get('/', (req, res) => {
  products.getAllProducts()
    .then(data => res.send(data));
});

router.get('/:id', (req, res) => {
  products.getProductById(req.params.id)
    .then(product =>
      product
        ? res.send(product)
        : res.send('Oops, not found'));
});

router.get('/:id/reviews', (req, res) => {
  products.getProductReviewById(req.params.id)
    .then(product =>
      product
        ? res.send(`${product.name} has ${product.reviews} reviews`)
        : res.send('Oops, not found'));
});

router.post('/', (req, res) => {
  products.addProduct(req.body)
    .then(() => res.send(JSON.stringify(req.body)))
    .catch(err => res.send(err.message));
});

router.put('/:id', (req, res) => {
  products.updateProduct(req.params.id, req.body)
    .then(() => res.send(JSON.stringify(req.body)))
    .catch(err => res.send(err.message));
});

export default router;
