import config from '../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import postcss from 'gulp-postcss';
import postcssImport from 'postcss-import';
import postcssNext from 'postcss-cssnext';

gulp.task('css:prod', () => gulp.src(`${config.paths.client.root}app.css`)
    .pipe(postcss([
        postcssImport(),
        postcssNext()
    ]))
    .pipe(gulp.dest(config.paths.builds.tmp.root))
    .on('error', util.log));
