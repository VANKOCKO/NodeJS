var http = require('http');
var fs = require('fs');
// chargement du fichier index.html affiche au client 

var server = http.createServer(function (req,res) {
    fs.readFile('./index.html', 'utf-8',function (erro,content) {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(content);
    });
    
});


// chargement de socket.io

var io =require('socket.io').listen(server);

// Quqnd le client se connect on le note dans la console

io.sockets.on('connection',function (socket) {
    
    console.log('Un client est connecte !');
    
});

server.listen();
