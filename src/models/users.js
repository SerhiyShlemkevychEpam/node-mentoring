import db from '../db';

const getAllUsers = () => db.Users.findAll({
  attributes: { exclude: ['pwd'] }
});

const findUserByUsername = username =>
  db.Users.findOne({
    where: {
      username
    }
  });

const verifyPassword = (user, pwd) => user.pwd === pwd;

export {
  getAllUsers,
  findUserByUsername,
  verifyPassword
};
