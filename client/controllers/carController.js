'use strict';

parkingApp.controller("carController", function($scope, $routeParams, parkingHttpFacade, parkingService, $log){

	

	var retrieveCar = function(id){
		$log.info('login to this function' + id);
		parkingHttpFacade.getCar(id).
		success(function(data, status){
			$log.info("Data: " + data);
			$scope.car = data;
		}).
		error(function(data, status){
			$scope.message = "There were something wrong";
		});
	};

	retrieveCar($routeParams.id);
});