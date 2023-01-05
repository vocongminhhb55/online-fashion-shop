const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const hbs = require('hbs');
const productRouter = require('./routes/index.js');
const homePageRouter = require('./routes/home-page-route.js');
const authRouter = require('./components/auth');
const passport = require('./components/auth/passport');
const adminRouter = require('./routes/admin')
const authApiRouter = require('./components/auth/api');
const db = require('./db');

const app = express();
const PAGE_SIZE =3;
var blocks = {};
app.use(session({
  secret: 'very secret keyboard cat',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.authenticate('session'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerHelper('extend', function(name, context) {
  var block = blocks[name];
  if (!block) {
    block = blocks[name] = [];
  }

  block.push(context.fn(this)); 
});

hbs.registerHelper('block', function(name) {
  var val = (blocks[name] || []).join('\n');

  // clear the block
  blocks[name] = [];
  return val;
});
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use('/admin', adminRouter);
app.use('/home-page/shop', productRouter);
app.use('/home-page', homePageRouter);
app.use('/auth', authRouter);
app.use('/api/auth', authApiRouter);
// app.use('/shop', productRouter);
// catch 404 and forward to error handler
app.use(function(req,
                 res,
                 next) {
  next(createError(404));
});

// error handler
app.use(function(err,
                 req,
                 res,
                 next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
