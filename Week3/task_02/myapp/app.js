const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const apiProducts = require('./routes/apiproducts');
const apiUsers    = require('./routes/apiusers');
const apiCategories = require('./routes/apicategories');

const mongoose = require('mongoose');
const {
  //MONGO_URI = 'mongodb://localhost:27017/nordic',
  MONGO_URI = 'mongodb+srv://devops:share123@cluster0-7pxu5.gcp.mongodb.net/nordic?retryWrites=true',
} = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('connection to db successfully!');
  });

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/api/products', apiProducts);
app.use('/api/users', apiUsers);
app.use('/api/categories', apiCategories);

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

//app.listen(3000, () => console.log("Listening on port 3000!"))
module.exports = app;
