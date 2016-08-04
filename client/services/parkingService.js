// There are three ways to creation a service component
// 1. Creating services with the factory
// 2. Creating services with the service
// 3. Creating service with the provider

// This is the code to create a service with the factory
'use strict';
parkingApp.factory("parkingService", function(parkingConfig){

	var _calculateTicket = function(car){
		var departHour = new Date().getHours();
		var entranceHour = car.entrance.getHours();
		var parkingPeriodTime = departHour - entranceHour;
		var parkingPrice = parkingPeriodTime * parkingConfig.parkingRate;

		return {
			period: parkingPeriodTime,
			price: parkingPrice
		};
	};

	return {
		calculateTicket: _calculateTicket
	};

});


// This is the code to create a service with the service
/*parkingApp.factory("parkingService", function(parkingConfig){

	this.calculateTicket = function(car){
		var departHour = new Date().getHours();
		var entranceHour = car.entrance.getHours();
		var parkingPeriodTime = departHour - entranceHour;
		var parkingPrice = parkingPeriodTime * parkingConfig.parkingRate;

		return {
			period: parkingPeriodTime,
			price: parkingPrice
		};	
	};	
});*/

// This is the code to create a service with the provider
/*parkingApp.factory("parkingService", function(parkingConfig){

	this.calculateTicket = function(car){
		var departHour = new Date().getHours();
		var entranceHour = car.entrance.getHours();
		var parkingPeriodTime = departHour - entranceHour;
		var parkingPrice = parkingPeriodTime * parkingConfig.parkingRate;

		return {
			period: parkingPeriodTime,
			price: parkingPrice
		};	
	};	
});*/

parkingApp.factory("parkingHttpFacade", function($http){
	var _getCars = function(){
		return $http.get("/cars");
	};

	var _getCar = function(id){
		return $http.get("/car/" + id);
	};

	var _saveCar = function(car){
		return $http.post("/cars", car);
	};

	var _updateCar = function(car){
		return $http.put("/cars" + car.id, car);
	};

	var _deleteCar = function(id){
		return $http.delete("/cars/" + id);
	};

	return {
		getCars : _getCar,
		getCar: _getCar,
		saveCar: _saveCar,
		updateCar: _updateCar,
		deleteCar : _deleteCar
	};

});