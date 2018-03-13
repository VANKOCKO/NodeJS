var http = require('http');
var url =require("url");
var server = http.createServer(function(req, res) {
    
    var page=url.parse(req.url).pathname;
    console.log(page); 

    res.writeHead(200, {"Content-Type": "text/plain"});
    if(page == '/')
    {
       res.write('vous etes a l\'acceuil');
    }
    else if(page == '/sous-sol')
    {
      res.write('vous etes au sous sol');
    }
    else if(page == 'etage/1/chambre')
    {
      res.write('privee');
    }

    res.end(); 
});


server.listen(9091);