var gulp = require('gulp');
var connect = require('gulp-connect');
//var bg = require("gulp-bg");

// gulp.task("server", bg("node", "--harmony", "gulpfile.js"));
//
// gulp.task("default", ["server"], function() {
// 	gulp.watch(["gulpfile.js"], ["server"]);
// });




/**
 * Configurations of logger.
 */
const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');

const consoleConfig = [
    new winston.transports.Console({
        'colorize': true
    })
];

const createLogger = new winston.Logger({
    'transports': consoleConfig
});

const successLogger = createLogger;
successLogger.add(winstonRotator, {
    'name': 'access-file',
    'level': 'info',
    'filename': './logs/access.log',
    'json': false,
    'datePattern': 'yyyy-MM-dd-',
    'prepend': true
});

const errorLogger = createLogger;
errorLogger.add(winstonRotator, {
    'name': 'error-file',
    'level': 'error',
    'filename': './logs/error.log',
    'json': false,
    'datePattern': 'yyyy-MM-dd-',
    'prepend': true
});

module.exports = {
    'successlog': successLogger,
    'errorlog': errorLogger
};





gulp.task('default', function () {
	connect.server({
		root: 'public',
		port: 3333
	})
});