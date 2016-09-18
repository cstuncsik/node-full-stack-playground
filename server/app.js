import fs from 'fs';
import http from 'http';
import https from 'https';
import express from 'express';
import config from './configs/config.js';
import configExpress from './configs/express.js';
import configMongo from './configs/mongo.js';

const app = express();
configExpress(app);

configMongo();

if(config.https){
    https.createServer({
        key: fs.readFileSync(config.serverRoot + '/certs/server.key'),
        cert: fs.readFileSync(config.serverRoot + '/certs/server.crt'),
        ca: fs.readFileSync(config.serverRoot + '/certs/ca.crt'),
        requestCert: true,
        rejectUnauthorized: false
    }, app).listen(config.ports.https);
} else {
    http.createServer(app).listen(config.ports.http);
}
