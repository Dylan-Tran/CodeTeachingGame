var express = require('express');

var routes = express.Router();

let problems = require("../config/problems");

routes.get('/', (req,res)=>{
    var page = "index";
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.render('index', {
        page
    });
})

routes.get('/index', (req, res)=>{
    var page = "index";
    res.render('index', {
        page
    })
})
routes.get('/testing', (req, res)=>{
    var page = "testing";
    res.render('testing', {
        page,
        problems
    } );
})

routes.get('/solve', (req, res)=>{
    var page = "solve"
    var problemNumber = 1;
    var text = problems[problemNumber];
    res.render('solve', {
        page,
        text
    })
})
module.exports = routes;
