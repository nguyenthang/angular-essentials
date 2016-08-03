'use strict';
parkingApp.controller('parkingController', function($scope){

	$scope.appTitle = "<b>AngularJS Essentials</b>";

	$scope.cars = [];
	
	$scope.colors = ["Gray", "Blue", "Green"];
	
	$scope.alertTopic = "<strong>Some thing went wrong</strong>";
	$scope.alertDescription = "<strong>You much inform the plate and the color of the car.</strong>";

	$scope.park = function(car){	
		car.entrance = new Date();
		$scope.cars.push(car);
		delete $scope.car;
	};	
});