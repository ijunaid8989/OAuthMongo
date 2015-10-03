var mongoose = require('mongoose'),
	localStrategy = require('passpot-local').Strategy;

var User = require('../models/user');

var Schema = mongoose.Schema;

passport.