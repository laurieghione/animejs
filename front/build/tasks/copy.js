var gulp = require('gulp');
var config = require("../config.json");
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var debug = require('gulp-debug');
var del = require("del");

gulp.task('copy', function() {

  gulp.src(config.copy.css)
    .pipe(debug())
    .pipe(gulp.dest(config.copy.destcss))
    .pipe(debug());

  gutil.log(gutil.colors.magenta('Copy css file ' + config.copy.css + ' on wordpress repository ' + config.copy.destcss));

  del(config.copy.destjs + "/*", {
    force: true
  })
  gulp.src(config.copy.js)
    .pipe(debug())
    .pipe(gulp.dest(config.copy.destjs))
    .pipe(debug())

  gutil.log(gutil.colors.magenta('Copy js file ' + config.copy.js + ' on wordpress repository ' + config.copy.destjs));

});
