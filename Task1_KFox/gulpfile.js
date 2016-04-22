/*jslint node:true */

'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('build-css', function () {
	return gulp.src('app/scss/*.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
	gulp.watch('app/scss/*.scss', ['build-css']);
});
