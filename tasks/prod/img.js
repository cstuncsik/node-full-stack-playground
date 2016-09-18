import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import imagemin from 'gulp-imagemin';

gulp.task('img:prod', () => gulp.src(`${config.paths.client.root}**/*.{jpg,gif,png}`)
    .pipe(imagemin())
    .pipe(gulp.dest(config.paths.builds.tmp.root))
    .on('error', util.log));
