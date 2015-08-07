var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');

gulp.task('connect', function () {
  return browserSync.init({
    files: [
      'script/*.js',
      'style/*.css',
      'index.html'
    ],
    port: 3000,
    logConnections: true,
    notify: false,
    server: './'
  });
});


gulp.task('test',['jscs','eslint'], function () {
  console.log('Test passed successfully');
});

gulp.task('jscs', function () {
      gulp.src('script/*.js')
        .pipe(jscs());
});

gulp.task('eslint',function () {
  return gulp.src(['script/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('default',['connect'], function(){

});