var gulp = require('gulp'),
    sass = require('node-sass'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps');

// ------------------------------------------------- configs
var paths = {
  sass: {
    src: '../scss/**/*.scss'
  }
};

gulp.task('sass', function () {
  return gulp.src('../scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../css'));
});

// gulp.task('sass:watch', function () {
//     gulp.watch('../scss/**/*.scss', ['sass']);
// });

gulp.task('sass:watch', function () {
  gulp.watch(paths.sass.src, gulp.series('sass'));
});


gulp.task('dev', function (callback) {
    runSequence(
        'sass',
        'sass:watch'
    )
});

gulp.task('default', gulp.series('sass:watch', 
  // gulp.parallel('sass')
));
