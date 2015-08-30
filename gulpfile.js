var gulp = require('gulp');
var browserSync = require('browser-sync');
var LiveServer = require('gulp-live-server');

gulp.task('live-server', function () {
	var server = new LiveServer('server/server.js');
	server.start();
})

gulp.task('serve', ['live-server'], function () {
	browserSync.init(null, {
		proxy: 'http://localhost:7777',
		port: 9001
	})
});
