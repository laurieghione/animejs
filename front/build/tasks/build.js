var gulp = require("gulp");
var argv = require("yargs").argv;
var runSequence = require('run-sequence');

gulp.task('build', function() {
  runSequence('clean', 'bump', 'sass', 'browserify');
});
