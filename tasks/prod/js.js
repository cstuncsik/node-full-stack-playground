import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babelify from 'babelify';

gulp.task('js:prod', () => browserify(`${config.paths.client.root}app.js`, {debug: true})
    .transform(babelify)
    .bundle()
    .on('error', util.log)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.builds.tmp.root)));
