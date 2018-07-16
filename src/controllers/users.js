import express from 'express';
import { getAllUsers } from '../models/users';

const router = express.Router();

router.get('/', (req, res) => {
  getAllUsers()
    .then(users => res.send(users))
    .catch(err => res.send(err.messsage));
});

export default router;
