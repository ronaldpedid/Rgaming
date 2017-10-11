'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./public/stylesheets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheets/css'));
});

gulp.task('watch', function () {
    gulp.watch('./public/stylesheets/**/*.scss', ['sass']);
});