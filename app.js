var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// controllers
const apiController = require('./controllers/api');

// socket.io setup
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT_SOCKET = 3002;
server.listen(PORT_SOCKET, () => {
  console.log(`socket listening on port ${PORT_SOCKET}`);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set routes
app.use('/api/v1', require('./routes/api'));

// socket.io connection
const socketNews = io
  .of('/news')
  .on('connection', socket => {
    socket.on('request data', interval => {
      let int = setInterval(() => {
        apiController.getNews((err, data) => {
          if (err) return console.error(err);
          socket.emit('data', data);
        });
      }, interval);

      socket.on('disconnect', () => {
        clearInterval(int);
      });
    });
  });

const socketStatus = io
  .of('/status')
  .on('connection', socket => {
    socket.on('request data', interval => {
      let int = setInterval(() => {
        apiController.getStatus((err, data) => {
          if (err) return console.error(err);
          socket.emit('data', data);
        });
      }, interval);

      socket.on('disconnect', () => {
        clearInterval(int);
      });
    });
  });

const socketUsers = io
  .of('/users')
  .on('connection', socket => {
    socket.on('request data', interval => {
      let int = setInterval(() => {
        apiController.getUsers((err, data) => {
          if (err) return console.error(err);
          socket.emit('data', data);
        });
      }, interval);

      socket.on('disconnect', () => {
        clearInterval(int);
      });
    });
  });

app.get('/', (req, res) => {
  res.send('Nothing to show.');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
