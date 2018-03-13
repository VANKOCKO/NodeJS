    var http = require('http');
    var url =require('url');
    var queryString = require('querystring');
    var EventEmitter = require('events').EventEmitter;
    var monmodule  = require('./node_modules/monmodule');
    var express =require('express');
    var server = http.createServer(function(req, res) 
    {
        var page=url.parse(req.url).pathname;

        var params=queryString.parse(url.parse(req.url).query);
        /** 
                //decoupe de l'url  
                if('prenom' in params && 'nom' in params )
                {
                    res.write('Vous vous appellez' + params['prenom'] + '  ' + params['nom'])
                }
                else {
                    res.write('Vous devez bien avoir un prenom et un nom');
                }
        **/
        res.writeHead(200, {"Content-Type": "text/plain"});å
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

/**
 *  Les evenements
 */
            server.on('close',function () {
            // faire quelques choses ici 
            console.log("bye bye"); 
            });
            /**
             *  creation d'un evenement
             */
            
            // initialisation de l'evenement 
            var jeu = new EventEmitter();
            //ecouter une evenement
            jeu.on('gameover',function(message) {
                console.log(message);
            })
            // emmetre un evenement  
            jeu.emit('gameover','Vous avez perdu !');

/**
 *  Les modules
 **/
          //  console.log(monmodule.direBonjour);
  
            

/**
 *  Express
 */     
           
           var app = express();
           // creation de route 
           app.get('/accueil', function (req,res) {
             res.setHeader('Content-Type','text/plain');
             res.send('Vous etes dans l\'acceuil');
           });
 
server.listen(9092);
//server.close(); 