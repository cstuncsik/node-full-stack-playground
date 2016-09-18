import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';

gulp.task('pug:dev', () => gulp.src(`${config.paths.client.root}index.pug`)
    .pipe(plumber())
    .pipe(pug({
        pretty: '    '
    }))
    .pipe(gulp.dest(config.paths.builds.dev.root))
    .on('error', util.log));
