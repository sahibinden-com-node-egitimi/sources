import express from 'express';
import bodyParser from 'body-parser';
import createError from 'http-errors';
import path from 'path';

// routes
import Index from './routes';
import Users from './routes/users';
import Settings from './routes/settings';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static('src/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', Index);
app.use('/users', Users);
app.use('/settings', Settings);

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
  res.json(err);
});

app.listen(3000, () => console.log('Server is up on 3000 PORT! '));
