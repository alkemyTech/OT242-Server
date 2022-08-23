const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
require('dotenv').config()

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const SwaggerOPtions = require("./swaggerOptions");

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const organizationRouter = require('./routes/organization');
const profileRouter = require('./routes/profile');
const newsRouter = require('./routes/admin/news');
const activitiesRouter = require('./routes/admin/activities');
const contactsRouter = require('./routes/contacts');
const testimonialsRouter = require('./routes/testimonials');
const userRouter = require('./routes/admin/users');
const categoriesRouter = require('./routes/categories');
const membersRouter = require('./routes/admin/members');
const rolesRouter = require('./routes/admin/roles');

const app = express();

app.use(cors());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const specs = swaggerJsDoc(SwaggerOPtions);

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/organizations', organizationRouter);
app.use('/auth', profileRouter);
app.use('/admin/news', newsRouter);
app.use('/admin/activities', activitiesRouter);
app.use('/contacts', contactsRouter);
app.use('/testimonials', testimonialsRouter);
app.use('/users', userRouter);
app.use('/categories', categoriesRouter);
app.use('/admin/members', membersRouter);
app.use('/admin/roles', rolesRouter);

app.use('/docs',swaggerUi.serve, swaggerUi.setup(specs))


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
