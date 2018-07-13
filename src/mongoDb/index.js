import mongoose from 'mongoose';
import { mongoHost, mongoPort } from '../config';
import modelsBuilder from './models';

const mongoDbUrl = `mongodb://${mongoHost}:${mongoPort}/Db`;
mongoose.Promise = global.Promise;

// connection
mongoose.connect(mongoDbUrl, { useMongoClient: true });
mongoose.connection
  .on('error', console.error.bind(console, 'MongoDb connection error:'));

// init models
const models = modelsBuilder(mongoose);

// seeding data
const mockedCities = require('./seeders/initCities.json');
const mockedProducts = require('./seeders/initProducts.json');
const mockedUsers = require('./seeders/initUsers.json');

models.City.collection.remove({});
models.City.collection.insertMany(mockedCities);
models.Product.collection.remove({});
models.Product.collection.insertMany(mockedProducts);
models.User.collection.remove({});
models.User.collection.insertMany(mockedUsers);

export { mongoose, models };
