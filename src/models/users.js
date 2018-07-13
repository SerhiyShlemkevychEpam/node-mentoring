const users = [
  {
    id: '1',
    username: 'user1',
    pwd: '123',
    email: 'user1@mail.com'
  },
  {
    id: '2',
    username: 'user2',
    pwd: 'asd',
    email: 'user2@mail.com'
  }
];

const getAllUsers = () =>
  users.map(user =>
    ({ username: user.username, email: user.email }));

const findUserByUsername = username =>
  users.find(user => user.username === username);

const verifyPassword = (user, pwd) => user.pwd === pwd;

export {
  getAllUsers,
  findUserByUsername,
  verifyPassword
};
