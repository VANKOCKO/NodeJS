var net = require("net");

var server=net.createServer(
    {
    allowHalfOpen:false
    },
    function(socket) {      
    }
);

server.listen(0,function() {
       var adress
});

