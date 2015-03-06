var gulp = require('gulp');

var uglify = require('gulp-uglify');

gulp.task('compress', function() {
  gulp.src('./public/js/development/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/production'))
});
