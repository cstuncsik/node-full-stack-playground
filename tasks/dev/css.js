import config from '../config.js';
import browserSync from 'browser-sync';
import gulp from 'gulp';
import util from 'gulp-util';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import postcssImport from 'postcss-import';
import postcssNext from 'postcss-cssnext';

gulp.task('css:dev', () => gulp.src(`${config.paths.client.root}app.css`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss([
        postcssImport(),
        postcssNext()
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.builds.dev.root))
    .pipe(browserSync.stream({
        match: '**/*.css'
    }))
    .on('error', util.log));
