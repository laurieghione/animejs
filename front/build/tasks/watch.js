var gulp = require("gulp");
var config = require("../config.json");
var watch = require('gulp-watch')
var argv = require("yargs").argv;

argv.watch = true;

gulp.task('watch', ["build"], function() {
  watch(config.sass.boot, function () {
    gulp.start('sass');
  });
    watch(config.browserify.watch, function () {
      gulp.start('browserify');
    });
});
