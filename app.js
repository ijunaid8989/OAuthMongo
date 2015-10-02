var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var path = require('path');
var	cookieParser = require('cookie-parser');
var	logger = require('morgan');
var	passport = require('passport');

var	app = express();


var routes = require('./routes/index');



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());



app.use('/',routes);

var port = 3000;

app.listen(port,function(){
	console.log("we are in on " + port);
});