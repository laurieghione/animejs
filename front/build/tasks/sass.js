var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var cmq = require('gulp-combine-media-queries');
var gutil = require('gulp-util');
var error = require('./util/error');
var config = require("../config.json");
var rename = require('gulp-rename');
var sassGlob = require('gulp-sass-glob');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src(config.sass.path + '/main.scss')
    .pipe(sassGlob()) // use glob import
    .pipe(sass().on('error', sass.logError)) //sass
    .pipe(autoprefixer())
    .pipe(cleanCSS()) // minify css file
    .pipe(rename('style.css'))
    .pipe(gulp.dest(config.output.path))
    .pipe(gulp.dest(config.copy.destcss));//copy wordpress

  gutil.log(gutil.colors.magenta('Copy css file ' + config.copy.css + ' on wordpress repository ' + config.copy.destcss));
});
