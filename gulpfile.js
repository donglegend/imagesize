var gulp = require('gulp');
var exec = require('child_process').exec;//require('gulp-exec');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('clean', function (){
  exec("rm -rf dist");
})

gulp.task('resize', ['clean'],function () {
  return gulp.src('./images/**/*')
    .pipe(imageResize({ 
      width : 2000
    }))
    .pipe(gulp.dest('dist/resize'));
});


gulp.task('min', ['clean'], function (){
	return gulp.src('./images/**/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant({quality: '65-80'})]
        }))
        .pipe(gulp.dest('dist/min'));
})