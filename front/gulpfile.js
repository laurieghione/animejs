var gulp = require("gulp");
var build = require("./build/tasks/build");
var clean = require("./build/tasks/clean");
var browserify = require("./build/tasks/browserify");
var sass = require("./build/tasks/sass");
var watch = require("./build/tasks/watch");
var bump = require("./build/tasks/bump");
var defaultgulp = require("./build/tasks/default");
var copy = require("./build/tasks/copy");