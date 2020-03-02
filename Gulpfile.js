var gulp = require('gulp');
var concat = require('gulp-concat');

var uglify = require('gulp-uglify');
var stripDebug = require('gulp-strip-debug');
var ngAnnotate = require('gulp-ng-annotate');
var gulpUtil = require('gulp-util');


gulp.task('build', function () {
    return gulp.src('ocLazyLoad.js')
        .pipe(ngAnnotate({
            add: true
        }))
        .pipe(stripDebug())
        .pipe(uglify({
                mangle: true
            })
            .on('error', gulpUtil.log))
        .pipe(concat('ocLazyLoad.min.js'))
        .pipe(gulp.dest('.'));
});