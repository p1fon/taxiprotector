const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const { watch, series } = require('gulp');

async function defaultTask() {
    gulp.src('src/css.css')
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
};

async function copy() {
    gulp.src('src/*.jpg')
    .pipe(gulp.dest('dist'))
    gulp.src('src/*.svg')
    .pipe(gulp.dest('dist'))
    gulp.src('src/*.png')
    .pipe(gulp.dest('dist'))
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
};

exports.default = ()=>{watch('src/*.*', series(defaultTask, copy))}