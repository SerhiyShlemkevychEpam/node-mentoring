import passport from 'passport';
import { Strategy } from 'passport-local';
import passportFB from 'passport-facebook';
import passportGoogle from 'passport-google-oauth';
import { findUserByUsername, verifyPassword } from '../models/users';

export default ({ app }) => {
  app.use(passport.initialize());


  passport.use(new Strategy(
    {
      usernameField: 'username',
      passwordField: 'pwd',
      session: false
    },
    (username, password, done) => {
      const user = findUserByUsername(username);
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!verifyPassword(user, password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    }
  ));

  passport.use(new passportFB.Strategy(
    {
      clientID: '',
      clientSecret: '',
      callbackURL: 'http://localhost:8080/authorise/facebook/callback'
    },
    (accessToken, refreshToken, profile, done) => done(null, profile)
  ));

  passport.use(new passportGoogle.OAuth2Strategy(
    {
      clientID: '',
      clientSecret: '',
      callbackURL: 'http://localhost:8080/authorise/google/callback'
    },
    (accessToken, refreshToken, profile, done) => done(null, profile)
  ));
};
