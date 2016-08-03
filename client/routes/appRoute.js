'use strict';

var parkingApp = angular.module('parking', ['ngRoute', 'ngSanitize']);

parkingApp.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: '../views/home/home.html',
		controller: 'parkingController'
	});
});