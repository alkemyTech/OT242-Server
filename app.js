const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
require('dotenv').config()

const { UploadImg, upload, VerifyMulterError, deleteImg } = require('./s3Services/s3')

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const organizationRouter = require('./routes/organization');
const profileRouter = require('./routes/profile');
const newsRouter = require('./routes/admin/news')

const app = express();
app.use(cors())

// To test s3
////////////////////////////////////////////////////////////////////////////////
/*
app.post("/s3/upload", upload.array("file"), async (req, res) => {
  try {
      const results = await UploadImg(req.files);
      console.log(results);
      return res.json({ status: "success" });
  } catch (err) {
      console.log(err);
  }
});
app.delete("/s3/delete/:id", async (req, res) => {
  try {
      const results = await deleteImg(req);
      console.log(results);
      return res.json({ status: "success" });
  } catch (err) {
      console.log(err);
  }
});
app.use((error, req, res, next) => {
  let er = VerifyMulterError(error);
  if (er != "") {
      return res.status(400).json({
          message: er,
      });
  }
});

https://ot242-server.s3.sa-east-1.amazonaws.com/uploads/
app.listen(5000, () => { console.log('listening on http://localhost:5000'); });
*/
////////////////////////////////////////////////////////////////////////////////////////////////


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/organizations', organizationRouter);
app.use('/auth', profileRouter);
app.use('/admin/news', newsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//////////////////////////







/////////////////////////
module.exports = app;
