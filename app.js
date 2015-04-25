var express       = require('express'),
    routes         = require('./routes'),
    path           = require('path'),
    mongoose       = require('mongoose'),
    morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    session        = require('express-session'),
    passport       = require('passport'),
    flash          = require('connect-flash'),
    configDB       = require('./config/database.js'),
    jwt            = require('jsonwebtoken');


mongoose.connect(configDB.url);
var app = express();
app.directory = __dirname;

require('./config/environments')(app);
require('./config/passport')(passport);


module.exports = app;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());


app.use(session({ secret: 'rhaalssessionsecret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routes/index.js')(app, passport);


app.listen(80);
console.log("App listening on port 8080");
