const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

let activeColor = '#FFFF00';

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.emit('new-color', activeColor);

  socket.on('new-color', (color) => {
    console.log('New Color:', color);

    socket.broadcast.emit('new-color', color);
    activeColor = color;
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
