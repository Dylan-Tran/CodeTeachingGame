var express = require('express');

var routes = express.Router();

let map = require("../config/problems");

routes.get('/', (req,res)=>{
    var page = "index";
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
    var problemNumber = 0; //From database get level load problem
    var text = map.problems[problemNumber]; //map of all problems
    console.log(text);
    res.render('solve', {
        page,
        problemNumber,
        map
    })
})
module.exports = routes;
