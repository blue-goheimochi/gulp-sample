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

gulp.task('default', ['browser-sync','minify-css','compress'], function(){
    gulp.watch([
        './public_html/css/*.css',
        './public_html/js/*.js'
    ], function(){
        browserSync.reload();
    });
});