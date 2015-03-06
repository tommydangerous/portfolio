var gulp = require('gulp');

var uglify    = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');

gulp.task('compress', function() {
  gulp.src('./public/css/development/application.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('./public/css/production'));

  gulp.src('./public/js/development/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/production'));
});
