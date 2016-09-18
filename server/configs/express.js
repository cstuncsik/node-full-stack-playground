import fs from 'fs';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import config from './config.js';
import * as routes from '../routes';

export default app => {

    if (config.prod) {
        let accessLogStream = fs.createWriteStream(`${config.root}/morgan.log`, {flags: 'a'});
        app.use(morgan('common', { skip: (req, res) => res.statusCode < 400, stream: accessLogStream }));
    } else {
        app.use(morgan('dev'));
    }
    app.use(bodyParser.json({type: 'application/*+json'}));
    app.use(bodyParser.urlencoded({extended: true}));

    // routes
    app.use('/api/photos', routes.photos);
    app.use('/api/todos', routes.todos);

    // static assets
    app.use(favicon(config.favicon));
    app.use(express.static(config.clientRoot));
    app.use(`/${config.bowerComponents}`, express.static(config.bowerComponents));

    // app bootstrap
    app.get('*', (req, res, next) => {
        if (req.method === 'GET' && req.accepts('html')){
            res.sendFile(`${config.clientRoot}/index.html`, {root: config.root});
        } else {
            next();
        }
    });
}
