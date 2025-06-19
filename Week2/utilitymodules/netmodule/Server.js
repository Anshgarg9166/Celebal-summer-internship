var net = require('net');

var server = net.createServer(function(connection){
    console.log('Client connected');

    connection.on('end',function(){
        console.log('Client disconnected');
    });

    connection.write('Hello world !\r\n');  // Send message to client
    connection.pipe(connection);             // Echoes back whatever client sends
});


server.listen(3000,function(){
        console.log('server is listening');
    });

//net.createServer(callback) creates the TCP server and passes the connection object for every new client.

//connection.pipe(connection) echoes the data back to the client.

//server.listen(3001) tells the server to start listening on port 3001.

//Placing server.listen() inside the callback would never run unless a connection is received, which creates a circular dependency.        