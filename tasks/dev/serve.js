import config from '../config.js';
import serverConfig from '../../server/configs/config.js';
import browserSync from 'browser-sync';
import nodemon from 'gulp-nodemon';
import gulp from 'gulp';

gulp.task('serve', () => {
    nodemon({
        script: 'server',
        watch: 'server'
    }).once('start', () => {
        browserSync({
            open: false,
            injectChanges: true,
            https: config.https,
            proxy: (config.https ? 'https' : 'http') + '://localhost:' + (config.https ? serverConfig.ports.https : serverConfig.ports.http)
        });
    });
});
