/**
 *
 * @authors Ted Shiu (ted@sitetag.us)
 * @date    2016-10-07 14:29:08
 */

const gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('autoprefixer'),
    postcssApply = require('postcss-apply'),
    postcssVar = require('postcss-css-variables'),
    postcss = require('gulp-postcss'),
    processors = [
        autoprefixer({browsers: ['last 2 version']}),
        postcssApply,
        postcssVar
    ];

gulp.task('default', function (cb) {
    var options = {};
    watch('./dev/*.css', options, function (e) {
        // console.log('e:'+JSON.stringify(e));
        console.log(new Date() + ' -- ' + e.history[0].replace(e.base, ''));
        // console.log('\n');
        gulp.src('./dev/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css/'));
    });
});