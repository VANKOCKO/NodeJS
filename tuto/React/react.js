var express= require('express');
var http = require('http');
var react =require('react');
var app = express();


app.use(react(function() {
    
    .get('/',function (req,res) {
        
    });
    .render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );

}))

app.listen(9191);


