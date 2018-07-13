import express from 'express';
import { getAllUsers } from '../models/users';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(getAllUsers());
});

export default router;
