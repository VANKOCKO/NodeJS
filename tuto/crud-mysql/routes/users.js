var express = require('express');
var app= express();

/**
 *  show all users
 */
app.get('/',function (req,res) {
     
    req.getConnection(function (error,conn) {
        conn.query('SELECT * FROM users ORDER BY id DESC',function (err,rows,fields) {
            if(err)
             {
                 req.flash('error', err);
                 res.render('user/list',
                    {
                       title:'User List',
                       data:''
                     }
                 )
            }
            else
            {
                res.render('user/list',{
                    title : 'User List',
                    data: rows
                });
            }
        });
    });
});

/**
 * show add user 
 */

 app.get('/add', function(req,res,next){

    res.render('user/add', {
          
        title:'', 
        name:'',
        age:'',
        email:'',
        
    });

 });

 /**
  *  Add user post action 
  */