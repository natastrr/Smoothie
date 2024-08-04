const {src, dest, task, series} = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

task('styles', function() {
    return src('src/css/styles.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist/css'));
});

task('scripts', function() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/jquery.inputmask/dist/jquery.inputmask.bundle.js',
        'src/main-script.js'
    ])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(dest('dist'));
});

task('default', series('styles', 'scripts'));