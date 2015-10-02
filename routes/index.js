var express = require('express');
var	basicAuth = require('../auth/basic');

var router = express.Router();

router.get('/',basicAuth.isAuthenticated,function(req,res){
	res.send('Hellos' + req.user.displayName + " . ");
});


module.exports = router;