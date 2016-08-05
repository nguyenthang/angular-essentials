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
