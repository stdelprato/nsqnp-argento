const http = require('http');
const express = require('express')
const socketio = require('socket.io');

const app = express();

const clientPath = `${__dirname}`;
console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);

io.on('connection', sock => {
    console.log(`Someone connected: ${sock.id}`);
    sock.emit('message', 'que onda papucho')

    sock.on('message', text => {
        io.emit('message', text);
    })
});

server.on('error', (err) => {
    console.error('Server error:', err);
});

server.listen(8080, () =>{
   console.log('RPS started on 8080'); 
});