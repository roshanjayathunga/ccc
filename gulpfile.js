var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

function style(){
    return gulp.src('./sass/styles.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({basename: 'styles.min'}))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function script(){
    return gulp.src('./js/scripts.js')
        // .pipe(uglify())
        // .pipe(rename({basename: 'scripts.min'}))
        // .pipe(gulp.dest('./js'));
        .pipe(js({outputStyle: 'compressed'}).on('error', js.logError))
        .pipe(rename({basename: 'scripts.min'}))
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.stream());
}


function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.scss', style);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);;
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.script = script;
exports.watch = watch;

