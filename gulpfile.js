var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var reload = require('gulp-livereload');
var vendors = require('./vendors.js')


gulp.task('uglifyjs', function() {
		gulp.src('./src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build'))
});	

gulp.task('html', function() {
		gulp.src('./src/*.html')
		.pipe(gulp.dest('build'))
});

gulp.task('img', function() {
		gulp.src(['./src/*.png', './src/*.jpg'])
		.pipe(gulp.dest('./build/img'))
});


gulp.task('css', function() {
		gulp.src('./src/*.css')
		.pipe(concat('custom.css'))
		.pipe(gulp.dest('build'))
});

gulp.task('vendor', function() {
		gulp.src(vendors.js)
		.pipe(concat('vendors.js'))
		.pipe(gulp.dest('./build'))
});

gulp.task('build', ['uglifyjs', 'html', 'css', 'img']);

gulp.task('build-all', ['build', 'vendor']);

gulp.task('watch', ['build'], function() {
	  reload.listen();
	  gulp.watch('build/**/*').on('change', reload.changed);
	  return gulp.watch('src/**/*', ['build']);
});