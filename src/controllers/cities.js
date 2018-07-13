import express from 'express';
import { MongoClient } from 'mongodb';
import { mongoHost, mongoPort } from '../config';
import { models } from '../mongoDb';

const mongoDbUrl = `mongodb://${mongoHost}:${mongoPort}/Db`;
const router = express.Router();

router.get('/randommongodb', (req, res) => {
  const mongoDbConnection = MongoClient.connect(mongoDbUrl);
  mongoDbConnection
    .then((db) => {
      const collection = db.collection('Cities');

      const cursor = collection.aggregate([{ $sample: { size: 1 } }]);
      cursor.toArray()
        .then(data => res.json(data[0]));

      db.close();
    })
    .catch(err => console.log(`Unable connect to MongoDB server ${err.message}`));
});

router.get('/randommongoose', (req, res) => {
  models.City.count()
    .then((count) => {
      const random = Math.floor(Math.random() * count);
      return models.City.findOne().skip(random)
        .then(data => res.json(data));
    })
    .catch(err => console.log(`Error: ${err}`));
});

router.get('/', (req, res) => {
  models.City.find()
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  const city = new models.City(req.body);
  city.save()
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

router.put('/:id', (req, res) => {
  const city = new models.City(req.body);
  const upsertData = city.toObject();
  delete upsertData._id;
  models.City.update(
    { _id: req.params.id },
    upsertData, { upsert: true },
    (err, result) => {
      if (err) console.log(err);
      res.json(result);
    }
  );
});

router.delete('/:id', (req, res) => {
  models.City.remove({ _id: req.params.id }, (err) => {
    if (!err) {
      res.send('Deleted');
    } else {
      res.json(err);
    }
  });
});

router.post('/seeding', (req, res) => {
  const mongoDbConnection = MongoClient.connect(mongoDbUrl);
  mongoDbConnection
    .then((db) => {
      const collection = db.collection('Cities');

      collection.insertMany(req.body)
        .catch((err) => {
          console.log(err.message);
          res.send(err.message);
        });

      db.close();
    })
    .catch((err) => {
      console.log(`Unable connect to MongoDB server ${err.message}`);
      res.send(err.message);
    });

  res.send('Seeded');
});

export default router;
