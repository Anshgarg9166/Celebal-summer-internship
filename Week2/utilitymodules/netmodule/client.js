var net = require('net');

var client = net.connect({port:3000},function(){
    console.log('Connected to the server');
});

client.on('data',function(data){
    console.log(data.toString());
    client.end();
});

client.on('end',function(){
    console.log('Disconnected from the server');
})

// net.createServer(callback) creates a TCP server.

// connection represents the client that connects.

// When a client connects:

// Logs “Client connected”.

// Sends "Hello world!" to the client.

// Uses connection.pipe(connection) to echo back anything the client sends.

// server.listen(3001) starts listening on port 3001.

// When the client disconnects, it logs “Client disconnected”.