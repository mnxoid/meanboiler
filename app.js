var express = require('express'),
    routes = require('./routes'),
    path = require('path'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
    
mongoose.connect('mongodb://localhost/mnxoid');
var app = express();
app.directory = __dirname;

require('./config/environments')(app);
require('./routes')(app);

module.exports = app;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());



app.listen(8080);
console.log("App listening on port 8080");
