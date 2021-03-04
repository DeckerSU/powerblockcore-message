'use strict';

var gulp = require('gulp');
var litecoreTasks = require('powerblockcore-build');

litecoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
