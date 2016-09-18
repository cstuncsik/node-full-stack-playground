import fs from 'fs';
import bluebird from 'bluebird';
import Photo from '../server/models/photo.js';
import config from '../server/configs/config.js';
import configMongo from '../server/configs/mongo.js'

bluebird.promisifyAll(fs);

configMongo();

Photo.find()
    .then(data => fs.writeFileAsync(`${config.root}/data/export.json`, JSON.stringify(data)))
    .catch(console.log)
    .finally(process.exit);
