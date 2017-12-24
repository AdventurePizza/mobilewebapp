var express = require('express');
var socket = require('socket.io');

var app = express();

var port = (process.env.PORT || 5000);

server = app.listen(port, 'http://104.236.66.20:5000/');

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});
