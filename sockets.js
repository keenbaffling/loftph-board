const apiController = require('./controllers/api');
const sockets = {};

sockets.init = server => {
  // socket.io setup
  const io = require("socket.io")(server);
  // io.sockets.on("connection", () => {
  //   console.log("socket connected");
  // });

  io.sockets.on('connection', socket => {
    console.log('client connected');

    // let intervalId = setInterval(() => {
      apiController.getNews((err, data) => {
        if (err) return console.error(err);
        socket.emit('newsData', data);
      });
    // }, 1000);

    socket.on('disconnect', () => {
      // clearInterval(intervalId);
      console.log('client disconnected');
    });
  });
};

module.exports = sockets;

// module.exports.listen = app => {
//   io = sio.listen(app);

//   const news = io.of('/api/v1/news');
//   news.on('connection', socket => {
//     socket.on('request data', interval => {
//       let intervalId = setInterval(() => {
//         apiController.getNews((err, data) => {
//           if (err) return console.error(err);
//           socket.emit('data', data);
//         });
//       }, interval);

//       socket.on('disconnect', () => {
//         clearInterval(intervalId);
//       });
//     });
//   });

//   const status = io.of('/api/v1/status')
//   status.on('connection', socket => {
//     socket.on('request data', interval => {
//       let int = setInterval(() => {
//         apiController.getStatus((err, data) => {
//           if (err) return console.error(err);
//           socket.emit('data', data);
//         });
//       }, interval);

//       socket.on('disconnect', () => {
//         clearInterval(int);
//       });
//     });
//   });

//   const users = io.of('/api/v1/users')
//   users.on('connection', socket => {
//     socket.on('request data', interval => {
//       let int = setInterval(() => {
//         apiController.getUsers((err, data) => {
//           if (err) return console.error(err);
//           socket.emit('data', data);
//         });
//       }, interval);

//       socket.on('disconnect', () => {
//         clearInterval(int);
//       });
//     });
//   });

//   return io;
// };
