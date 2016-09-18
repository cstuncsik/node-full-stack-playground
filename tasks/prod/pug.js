import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import pug from 'gulp-pug';

gulp.task('pug:prod', () => gulp.src(`${config.paths.client.root}index.pug`)
    .pipe(pug({
        pretty: false
    }))
    .pipe(gulp.dest(config.paths.builds.tmp.root))
    .on('error', util.log));
