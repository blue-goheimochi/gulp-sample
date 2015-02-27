var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: "./public_html",
            port: 8080
        }
    });
});

gulp.task('default', ['browser-sync'], function(){
    gulp.watch(['./public_html/css/app.css'], function(){
        browserSync.reload();
    });
});