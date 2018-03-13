var express = require('express');

var app = express();

app.get('/', function (req,res,next) {
      res.setHeader('Content-Type','text/plain');
      res.send('Vous etes a l\'acceuil');
      res.status(404).send('Page introuvable');
});


app.listen(9090);