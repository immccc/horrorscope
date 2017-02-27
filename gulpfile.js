'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var stylus = require('gulp-stylus');
var exec = require('child_process').exec;

var jsuglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  stylus: 'resources/styles/*.styl',
  ts: 'src/**/*.ts',
  views: 'src/frontend/**/*.html',
  js: 'src/**/*.js'
}

gulp.task('compile-typescript', function() {
  var tsProject = ts.createProject('src/tsconfig.json');

  return tsProject.src().pipe(sourcemaps.init())
        .pipe(tsProject())
        .js.pipe(sourcemaps.write()).pipe(gulp.dest('dist'));
});

gulp.task('copy-js', function() {
  return gulp.src(paths.js).pipe(gulp.dest('dist'));
});

gulp.task('copy-resources', function() {
  gulp.src('resources/**/*.woff**').pipe(gulp.dest('dist/resources'));
  gulp.src('src/frontend/**/*.html').pipe(gulp.dest('dist/frontend'));
  gulp.src('src/frontend/views/*').pipe(gulp.dest('dist/frontend/views'));
});

gulp.task('compile-stylus', function() {
  return gulp.src(paths.stylus).pipe(stylus()).pipe(gulp.dest('dist/resources/styles'));
});

gulp.task('server', function (cb) {
  exec('set DEBUG=express* && node bin/www', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});


gulp.watch(paths.stylus, ['compile-stylus']);
gulp.watch(paths.ts, ['compile-typescript']);
gulp.watch(paths.views, ['copy-resources']);
gulp.watch(paths.js, ['copy-js']);

gulp.task('default', ['compile-typescript', 'copy-js', 'copy-resources', 'compile-stylus', 'server']);
