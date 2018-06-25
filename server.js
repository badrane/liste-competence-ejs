const express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));



app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
// app.get('/', function(req,res){
//     res.render('index');
// });

app.get('/', function(req, res){
    var liste = fs.readFileSync(__dirname+"/data/competence.json");
    liste = JSON.parse(liste);
    res.render('index', {data:liste});
});

// app.get('/', function(req, res){
//     var res.
//     res.render('index', {message : 'De groeten'});
// });


app.listen(3007, function(){
    console.log('on');
});