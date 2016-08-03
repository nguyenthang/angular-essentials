'use strict';

var parkingApp = angular.module('parking', ['ngRoute', 'ngSanitize']);

parkingApp.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: '../views/home.html',
		controller: 'parkingController'
	});
});