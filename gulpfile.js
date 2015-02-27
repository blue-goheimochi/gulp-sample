var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: "./public_html",
            port: 8080
        }
    });
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});

gulp.task('minify-css', function () {
    gulp.src(['./resource/css/app.css'])
        .pipe(minifyCSS())
        .pipe(gulp.dest('./public_html/css')
    );
});

gulp.task('compress', function () {
    gulp.src(['./resource/js/app.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./public_html/js')
    );
});

gulp.task('watch', ['browser-sync','minify-css','compress'], function () {
    gulp.watch([
        './resource/css/*.css',
        './resource/js/*.js'
    ], ['minify-css','compress', 'bs-reload']);
});

gulp.task('default', ['minify-css','compress']);