var express = require('express');

let login = require('../models/login');

var routes = express.Router();

routes.post('/createAccount', (req, res) => {
    
    user = {
        username: req.body.username,
        password: req.body.password
    };
    
    let newAccount = new login(user);
    newAccount.save(function(err){
        if(err){    
            console.log("Couldn't create an account");
            res.render('index');
        } else{
//            res.render('login')
        }
    })
});


module.exports = routes;
