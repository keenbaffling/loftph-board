const io = require('socket.io')();
const axios = require('axios');

io.on('connection', client => {
  console.log('client connected');

  client.on('start', interval => {
    setInterval(() => {
      client.emit('get started', 'get started');
    }, interval);
  });

  client.on('disconnect', () => {
    io.emit('client disconnected');
  });
});

io.listen(3001);

console.log(`Listening on port 3001`);
