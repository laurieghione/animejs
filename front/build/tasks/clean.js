var gulp = require("gulp");
var del = require("del");
var config = require("../config.json");

gulp.task('clean', function() {
  return (del(config.output.path + "/*"))
});
