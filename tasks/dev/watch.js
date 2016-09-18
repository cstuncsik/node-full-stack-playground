import config from '../config.js';
import gulp from 'gulp';

gulp.task('watch', () => {
    gulp.watch(`${config.paths.client.root}**/*.pug`, ['pug:dev']);
    gulp.watch(`${config.paths.client.root}**/*.css`, ['css:dev']);
    gulp.watch(`${config.paths.client.root}**/*.js`, ['js:dev']);
    gulp.watch(`${config.paths.client.root}**/*.{jpg,gif,png}`, ['img:dev']);
});
