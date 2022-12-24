const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const productRouter = require('./routes/index.js');
const homePageRouter = require('./routes/home-page-route.js');
const authRouter = require('./components/auth');
const passport = require('./components/auth/passport');
const adminRouter = require('./routes/admin')
const db = require('./db');

const app = express();
const PAGE_SIZE =3;
app.get ('/products',(req, res, next) => {
  var page = req.query.page;
  if(page){
    page = parseInt(page);
    if(page <1){
      page=1;
    }
    const numberSkip = (page -1) * PAGE_SIZE;
    db.find({})
    .skip(numberSkip)
    .limit(PAGE_SIZE)
    .then(data=>{
      res.json(data);
    })
    .catch(err=>{
      res.status(500).json('Loi');
    })
  }
  else{
    db.find({})
    .then(data=>{
      res.json(data);
    })
    .catch(err=>{
      res.status(500).json('Loi');
    })
  }
})

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

app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use('/admin', adminRouter);
app.use('/home-page/shop', productRouter);
app.use('/home-page', homePageRouter);
app.use('/auth', authRouter);
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
