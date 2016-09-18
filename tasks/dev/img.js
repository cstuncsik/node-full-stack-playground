import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';

gulp.task('img:dev', () => gulp.src(`${config.paths.client.root}**/*.{jpg,gif,png}`)
    .pipe(plumber())
    .pipe(newer(`${config.paths.builds.dev.root}**/*.{jpg,gif,png}`))
    .pipe(gulp.dest(config.paths.builds.dev.root))
    .on('error', util.log));
