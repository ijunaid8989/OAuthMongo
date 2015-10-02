var passport = require('passport');
var	BasicStrategy = require('passport-http').BasicStrategy;


var authenticate = function(username,password,callback){
	if (username === "foo" && password === "bar") {
		return callback(null,{
			username : "foo",
			displayName : "Junaid"
		});
	}else{
		return callback(null,false);
	}

	return callback({
		message : "Something went Wrong"
	});
};

passport.use(new BasicStrategy(authenticate));

exports.isAuthenticated = passport.authenticate('basic',{
	session : false
});