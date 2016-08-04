'use strict';

var parkingApp = angular.module('parking', ['ngRoute', 'ngSanitize']);

parkingApp.config(function($routeProvider, $locationProvider){
	//$locationProvider.html5Mode(true);
	$routeProvider.when('/', {
		templateUrl: '../views/detail/home.html',
		controller: 'parkingController'
	});
});