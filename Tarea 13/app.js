var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var posicionesRouter = require('./routes/posiciones');
var contactoRouter = require('./routes/contacto');
var resultadosRouter = require('./routes/resultados');
var ultnotRouter = require('./routes/ultnot');
var ultnotbundesligaRouter = require('./routes/ultnotbundesliga');
var ultnotlaligaRouter = require('./routes/ultnotlaliga');
var ultnotligue1Router = require('./routes/ultnotligue1');
var ultnotpremierRouter = require('./routes/ultnotpremier');
var ultnotserieaRouter = require('./routes/ultnotseriea');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contacto', contactoRouter);
app.use('/resultados', resultadosRouter);
app.use('/posiciones', posicionesRouter);
app.use('/ultnot', ultnotRouter);
app.use('/ultnotbundesliga', ultnotbundesligaRouter);
app.use('/ultnotlaliga', ultnotlaligaRouter);
app.use('/ultnotligue1', ultnotligue1Router);
app.use('/ultnotpremier', ultnotpremierRouter);
app.use('/ultnotseriea', ultnotserieaRouter);

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

module.exports = app;
