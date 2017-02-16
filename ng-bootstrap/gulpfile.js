var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('less', function() {
    return gulp.src([
            'static/less/back.less'
        ])
        .pipe($.less())
        .pipe(gulp.dest('static/css'));
})

gulp.task('default', function(cb) {
    $.sequence('less', cb);
});

gulp.task('watch', function() {
    $.livereload.listen();
    gulp.watch('static/less/**.less', ['less']);
});
