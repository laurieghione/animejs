var gulp = require('gulp');
var browserify = require('browserify');
var argv = require("yargs").argv;
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var config = require("../config.json");
var error = require('./util/error');
var gStreamify = require("gulp-streamify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var env = argv.env != "production";
var debug = require('gulp-debug');


gulp.task('browserify', function() {

  browserify({
      entries: config.browserify.boot,
      debug: env,
      paths: ['./src/scripts/']
    })
    .transform("babelify", {
      presets: ["env"]
    }).bundle()
    .on('error', error)
    .pipe(source("main.js"))
    .pipe(debug())
    .pipe(buffer())
    .pipe(argv.env != "production" ? gutil.noop() : gStreamify(uglify()))
    .pipe(gulp.dest(config.output.path))
    .pipe(debug())
    .pipe(gulp.dest(config.copy.destjs)) // copy file wordpress

  gutil.log(gutil.colors.magenta('Copy js file ' + config.copy.js + ' on wordpress repository ' + config.copy.destjs));

});
