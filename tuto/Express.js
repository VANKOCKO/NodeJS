var session = require('cookie-session');
var express = require('express');
var bodyParser= require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended :false});
var app = express();

app.get('/acceuil', function (req,res,next) {
      res.setHeader('Content-Type','text/plain');
      res.status(404).send('Page introuvable');
      res.render('view.ejs')
});

/**
 *   TodoList
 */


 
  /*On utilise des sessions  */
 
  app.use(Session({secret: 'todotopsecret'}))
   
  /* Si il n'ya pas de Todolist dans la session en cree un vide sous forme d array  */

 .use(function (req,res,next) {

      if(typeof(req.session.todolist == 'undefined')){
             req.session.todolist = [];
      }
      next();
})

 /*On affiche la TodoList et le formulaire*/
   
 .get('/todo',function (req,res) {
     res.render('todo.ejs',{todolist: req.session.todolist})
 })

 /* Gestion des routes en dessous  */

 
 app.get('/todo',function (req,res) {
      
 });

 app.post('todo/ajouter',function (req,res) {
    
    
 });

app.listen(9090);