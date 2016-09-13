require('es6-promise').polyfill();
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
 
gulp.task('lint', function() {
  return gulp.src(['./assets/*.js','!./assets/jquery.min.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src(['./assets/*.css','!./assets/demo.css'])
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist'));
});

gulp.task('skins', function() {
  gulp.src(['./assets/skins/*.css'])
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/skins'));
});
// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./assets/*.js'])
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});
// gulp.task('watch', ['browser-sync'], function () {
//     gulp.watch("*.html").on('change', bs.reload);
// });
gulp.task('default', ['scripts', 'styles','skins', 'lint','browser-sync'], function() {

  gulp.watch(["*.html","*.js",".css"]).on('change', bs.reload);
  // watch for JS changes
  gulp.watch('./assets/*.js', function() {
    gulp.run('lint', 'scripts');
  });

  // watch for CSS changes
  gulp.watch('./assets/*.css', function() {
    gulp.run('styles');
  });
});