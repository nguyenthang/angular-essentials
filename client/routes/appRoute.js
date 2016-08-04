'use strict';

var parkingApp = angular.module('parking', ['ngRoute', 'ngSanitize', 'ngAnimate']);

parkingApp.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: '../views/home/home.html',
		controller: 'parkingController'
	}).when('/parking', {
		templateUrl: '../views/parking/home.html',
		controller: 'parkingController'
	}).when('/car/:id', {
		templateUrl: '../views/parking/car.html',
		controller: 'carController'
	}).otherwise({
		redirectTo: '/parking'
	});
});

/*parkingApp.config(function(parkingServiceProvider){
	parkingServiceProvider.setParkingRate(10);
});*/