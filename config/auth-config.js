var mongoose = require('mongoose'),
	LocalStrategy = require('passpot-local').Strategy;

var User = require('../models/user');

var Schema = mongoose.Schema;

passport.localRegisterInit = function(req,email,password,callback){
	   User.findOne({
	   		'local.email' :  email
	   } , function(err, user){
	   		if (err) {
	   			throw err
	   		}
	   		if (user) {
	   			return callback(null,false);
	   		}	

	   		var newUser = new User();
	   		newUser.local.email = email;
	   		newUser.local.password = newUser.hasPassword(password);

	   		newUser.save(function(err){
	   			if (err) {
	   				throw err;
	   			}
	   			return callback(null,newUser);
	   		});

	   });
};


passport.localLoginInit = function(req,email,password,callback){
	   User.findOne({
	   		'local.email' :  email
	   } , function(err, user){
	   		if (err) {
	   			throw err
	   		}
	   		if (!user && !user.validatePassword(password)) {
	   			return callback(null,false);
	   		}
	   		return callback(null,user);
	   });
};



var localDash = {
	usernameField : "emailAddress",
	passReqToCallback : true
};

passport.use('local-register',new LocalStrategy(localDash, localRegisterInit);
passport.use('local-login',new LocalStrategy(localDash, localLoginInit);

module.exports = {
	localRegister : passport.authenticate('local-register', {
		successRedirect : '/',
		failureRedirect : '/register'
	}),
	localLogin : passport.authenticate('local-login',{
		successRedirect : '/',
		failureRedirect : '/login'
	)}
};