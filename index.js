const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


const port = 3871;

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('connected...');

  socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg);
    console.log(msg)
  })

//   socket.on('disconnect', (msg) => {
//     io.emit('user disconnected', msg);
//   });
});

http.listen(port, () => {
  console.log('listening...');
});





