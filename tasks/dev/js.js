import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babelify from 'babelify';

gulp.task('js:dev', () => browserify(`${config.paths.client.root}app.js`, {debug: true})
    .transform(babelify)
    .bundle()
    .on('error', function (error) {
        util.log(util.colors.red(error));
        this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.builds.dev.root)));
