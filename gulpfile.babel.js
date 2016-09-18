import gulp from 'gulp';
import sequence from 'run-sequence';
import requireDir from 'require-dir';


requireDir('./tasks/prod');

gulp.task('build', () => {
    sequence('clean:prod',
        'lint:prod',
        [
            'pug:prod',
            'css:prod',
            'img:prod',
            'js:prod'
        ],
        'html:prod',
        'rev:prod'
    );
});


requireDir('./tasks/dev');

gulp.task('default', () => {
    sequence('clean:dev',
        [
            'pug:dev',
            'css:dev',
            'img:dev',
            'js:dev'
        ],
        'watch',
        'serve'
    );
});
