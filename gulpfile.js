// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./Week3-Admin_order/*.scss')//抓
        .pipe(sass())
        .pipe(gulp.dest('./Week3-Admin_order/CSS/'))//建立
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./*.scss', ['sass']);
})