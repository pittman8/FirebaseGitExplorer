var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var api = require('./routes/api');
var getGist = require('./routes/get-gist');
var getUser = require('./routes/get-user');
var qux = require('./routes/qux');
var writeUser = require('./routes/write-user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', api);
app.use('/get-user', getUser);
app.use('/get-gist', getGist);
app.use('/qux', qux);
app.use('/write-user', writeUser);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    'use strict';
    next(createError(404));
});

// error handler
app.use(function(err, req, res) {
    'use strict';
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
