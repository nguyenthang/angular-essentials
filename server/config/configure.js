<<<<<<< HEAD
var path = require('path'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser');

=======
var express = require('express'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	logger = require('morgan'),
	route = require('../routes/routes');


module.exports = function(app){
	app.use(logger('dev'));
	
	app.use(bodyParser.urlencoded({'extended': false}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	route(app);
	return app;
};
>>>>>>> 410bb987bc7e63f0c6f5499cd2fc7715140088a8
