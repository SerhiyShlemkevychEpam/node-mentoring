import errorMiddleware from './error';
import logger from './logger';
import cookieParser from './cookie-parser';
import queryParser from './query-parser';
import bodyParser from './body-parser';
import passport from './passport';
import jwt from './jwt';

const mwBuilder = options => [
  bodyParser,
  cookieParser,
  queryParser,
  passport,
  jwt,
  logger
].map(factory => factory(options));

export { errorMiddleware, mwBuilder };
