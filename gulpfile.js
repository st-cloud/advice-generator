'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
// const { watch } = require('gulp');

sass.compiler = require('node-sass');

gulp.task('sass', function () {

   return gulp.src('./sass/**/*.scss')
   .pipe(concat('custom.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./dist/'));

  });

exports.default = sass;

// const { src, dest, series } = require('gulp');
// const concat = require('gulp-concat');

// function clean(cb) {
//    cb();
// }

// function build(cb) {
//    cb();
// }

// function sass(cb) {
//    return src('src/*.scss')
//    .pipe(concat('custom.scss'))
//    .pipe(sass().on('error', sass.logError))
//    .pipe(dest('./dist/'));
//    cb();
// }

// exports.build = build;
// exports.sass = sass;
// exports.default = series(clean, build, sass);
