import express from 'express';
import products from './products';
import mongooseProducts from './mongooseProducts';
import mongooseUsers from './mongooseUsers';
import users from './users';
import auth from './auth';
import cities from './cities';

const router = express.Router();

router.use('', auth);
router.use('/api/products', products);
router.use('/api/users', users);
router.use('/api/cities', cities);
router.use('/api/mongoose/products', mongooseProducts);
router.use('/api/mongoose/users', mongooseUsers);

router.get('/', (req, res) => {
  res.redirect('/api/products');
});


export default router;
