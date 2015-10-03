var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs'),
	Schema = mongoose.Schema;

var User = new Schema({
	local : {
		email : String,
		password : String
	}
});

User.methods.hashPassword = function(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

User.methods.validatePassword = function(password){
	return bcrypt.compare(password,this.local.password);
};


module.exports =  mongoose.model('User',User);