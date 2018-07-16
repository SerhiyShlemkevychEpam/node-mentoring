import expressJWT from 'express-jwt';

export default ({ app }) => {
  app.use(expressJWT({ secret: 'my secret' })
    .unless({ path: ['/auth', '/authorise', '/authorise/facebook/callback', '/authorise/google/callback'] }));
};
