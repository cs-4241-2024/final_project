var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var indexRouter = require('./routes/index');
var cheseRouter = require('./routes/chese');
const {connectDatabase} = require('./database');
const {JWT_SECRET} = require('./config');

var app = express();
connectDatabase();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../chese-board-client/build')));

app.use((req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId
  }
  next()
})

app.use('/', indexRouter);
app.use('/chese', cheseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('*', (req, res) => res.sendFile(path.resolve('..', 'chese-board-client', 'build', 'index.html')));

module.exports = app;
