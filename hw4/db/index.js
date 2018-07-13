import path from 'path';
import globby from 'globby';
import Sequelize from 'sequelize';
import { host, dbPort, database, username, password, dialect } from '../config';

const db = {};

/**
 * Configuration connection to DB
 */
const options = {
  host,
  dbPort,
  database,
  username,
  password,
  dialect,
  operatorsAliases: false,
  logging: console.log,
  define: {
    freezeTableName: true,
    timestamps: false
  }
};

const sequelize = new Sequelize(options);

/**
 * Check connection to DB
 */
sequelize.authenticate()
  .then(() => {
    console.log('connection has been established successfully');
  })
  .catch((err) => {
    console.log('unable to connect to the database', err);
  });

const pattern = path.join(__dirname, '/models/**', '*.js');
const models = globby.sync([pattern]);

models.forEach((file) => {
  const model = sequelize.import(file);
  db[model.name] = model;
});

export default db;
