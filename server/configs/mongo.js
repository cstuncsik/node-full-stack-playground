import fs from 'fs';
import bluebird from 'bluebird';
import mongoose from 'mongoose';
import config from './config.js';

export default () => {

    mongoose.Promise = bluebird;

    const conn = mongoose.connect('mongodb://localhost:27017/node-full-stack-playground', {
        server: {
            socketOptions: {
                keepAlive: 1
            }
        }
    }).connection;

    conn.on('error', error => {
        if (config.prod) {
            const connLogStream = fs.createWriteStream(`${config.root}/mongo.log`, {flags: 'a'});
            connLogStream.write(`${error.toString()} - ${Date()}\n`);
        } else {
            console.log(error);
        }
    });

}
