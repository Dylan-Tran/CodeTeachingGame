var express = require('express');
var routes = express.Router();

var problems = ["question1", "question2"]

routes.get('/', (req,res)=>{
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.render('index');
})

routes.get('/testing', (req, res)=>{
    var page = "testing";
    res.render('testing', {
        page,
        problems
    } );
})

module.exports = routes;
