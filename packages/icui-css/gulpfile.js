const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-cssmin');

gulp.task('compile', () => {
  return gulp.src('./src/*.css')
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('build', ['compile']);
