import express from 'express';
import { models } from '../mongoDb';

const router = express.Router();

router.get('/', (req, res) => {
  models.Product.find()
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

export default router;
