import fs from 'fs';
import bluebird from 'bluebird';
import Photo from '../server/models/photo.js';
import config from '../server/configs/config.js';
import configMongo from '../server/configs/mongo.js'

bluebird.promisifyAll(fs);

configMongo();

fs.readFileAsync(`${config.root}/data/photos.json`)
    .then(data => Photo.insertMany(JSON.parse(data)))
    .catch(console.log)
    .finally(process.exit);
