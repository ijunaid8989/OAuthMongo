// All required packages
var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var path = require('path');
var engine = require('ejs-locals');
var	cookieParser = require('cookie-parser');
var session = require('express-session');
var database = require('./config/database');
var	logger = require('morgan');
var	passport = require('passport');

var	app = express();

app.engine('ejs','engine');
app.set('view engine','ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret : "What are you",
	resaved : true,
	saveUninitialized : false
}));

app.use(passport.initialize());
app.use(passport.session());

database.connect();

var routes = require('./config/routes');


app.use(routes);

app.use(function(req,res,next){
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

var port = 3000;

app.listen(port,function(){
	console.log("we are in on " + port);
});