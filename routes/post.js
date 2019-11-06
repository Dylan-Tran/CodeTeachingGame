var express = require('express');
var routes = express.Router();

routes.postn('/', (req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
})


module.exports = routes;
