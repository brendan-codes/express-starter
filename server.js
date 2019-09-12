// require
let express = require('express');
let parser = require('body-parser');
let path = require('path');
let mongoose = require('mongoose');


let app = express();

app.use(parser.urlencoded({extended: true})) // accept form data

// static files
// imgs, css, static js, static html
app.use(express.static(path.join(__dirname, './static')));

// view engine
app.set('view engine', 'ejs'); // sets view engine, enables .render
app.set('views', path.join(__dirname, './views')); // sets view folder path, shows view location

// routes
app.get('/', function(req, res){
    let object = {
        name: "Brendan",
        age: 300
    }
    res.render('index', {data: object});
})

// listen
app.listen(8005, function(){
    console.log("Express Demo on port 8005");
})