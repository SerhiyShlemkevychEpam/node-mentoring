import express from 'express';
import products from './products';
import users from './users';
import auth from './auth';

const router = express.Router();

router.use('', auth);
router.use('/api/products', products);
router.use('/api/users', users);

router.get('/', (req, res) => {
  res.redirect('/api/products');
});


export default router;
