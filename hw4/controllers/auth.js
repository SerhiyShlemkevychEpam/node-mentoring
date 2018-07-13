import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { findUserByUsername, verifyPassword } from '../models/users';

const router = express.Router();

router.get('/authorise/facebook/callback', passport.authenticate('facebook', { session: false }), (req, res) => {
  const token = jwt.sign({}, 'my secret');
  res.status(200).json(
    {
      code: '200',
      message: 'OK',
      token
    });
});

router.get('/authorise/google/callback', passport.authenticate('google', { session: false, scope: ['profile', 'email'] }), (req, res) => {
  const token = jwt.sign({}, 'my secret');
  res.status(200).json(
    {
      code: '200',
      message: 'OK',
      token
    });
});

router.post('/authorise', passport.authenticate('local', { session: false }), (req, res) => {
  const { user } = req;
  const token = jwt.sign({ id: user.id }, 'my secret');
  res.status(200).json(
    {
      code: '200',
      message: 'OK',
      data: {
        user: {
          email: user.email,
          username: user.username
        }
      },
      token
    });
});

router.post('/auth', (req, res) => {
  findUserByUsername(req.body.username)
    .then((user) => {
      if (!user) {
        res.status(403).send({ status: 403, message: 'Incorrect username.' });
      } else if (!verifyPassword(user, req.body.pwd)) {
        res.status(403).send({ status: 403, message: 'Incorrect password.' });
      } else {
        const token = jwt.sign({ id: user.id }, 'my secret');
        res.status(200).json(
          {
            code: '200',
            message: 'OK',
            data: {
              user: {
                email: user.email,
                username: user.username
              }
            },
            token
          });
      }
    });
});

export default router;
