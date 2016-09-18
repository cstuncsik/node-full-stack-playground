import config from '../config.js';
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cssnano from 'gulp-cssnano';
import usemin from 'gulp-usemin';
import util from 'gulp-util';

gulp.task('html:prod', () => gulp.src(config.paths.builds.tmp.root + 'index.html')
    .pipe(usemin({
        cssVendor: [cssnano()],
        css: [cssnano()],
        jsVendor: [uglify()],
        js: [uglify()]
    }))
    .pipe(gulp.dest(config.paths.builds.tmp.root))
    .on('error', util.log));
