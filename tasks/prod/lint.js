import gulp from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('lint:prod', () => gulp.src(['**/*.js', '!builds/**', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()));
