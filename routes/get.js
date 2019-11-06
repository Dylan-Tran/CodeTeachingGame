var express = require('express');
var routes = express.Router();

routes.get('/', (req,res)=>{
    console.log("hit");
    res.sendFile(path.join(__dirname + '/index.html'));
    //    res.render('index');
})




module.exports = routes;
