/**
 * Gulpfiles!
 *
 * Add a gulp plugin
 * 1. Find it online (on NPM)
 * 2. npm install <plugin>
 * 3. require() it
 * 4. Add it to the right pipelines
 */

var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var browserify = require('gulp-browserify');

gulp.task('default', ['html', 'css']);

// Create a new task called 'html'. The function I pass as the second
// parameter tells it what this mythical 'html' task does.
gulp.task('html', function () {
    // First, find all of my HTML files.
    // Make any modifications (none for now)
    // Output them to their final resting place.

    // Copy all HTML files in the current directory into the public/ directory.
    return gulp.src('./*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.failReporter())
        // make sure all HTML is valid
        .pipe(gulp.dest('public/'));
});

gulp.task('css', function () {
    // use gulp-sass here
});

gulp.task('js', function () {
    return gulp.src('./js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('public/js'));
});







/*
var html_validation = require('gulp-htmlhint');
var css_validation = require('gulp-css-validator');
var js_validation = require('gulp-jslint');
var uglify = require('gulp-uglify');
var js_obfuscator = require('gulp-js-obfuscator');
*/