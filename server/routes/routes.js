var express = require('express'),
	router = express.Router(),	
	parkingController = require('../controllers/parkingController');


 	module.exports = function(app){

	router.get('/cars', parkingController.getCars);
	router.post('/cars', parkingController.saveCar);
	router.get('/car/:id', parkingController.getCar);

	app.use(router);
};