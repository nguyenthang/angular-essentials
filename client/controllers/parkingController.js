'use strict';
parkingApp.controller('parkingController', function($scope, parkingService, 
	parkingHttpFacade, $log){

	$log.info("Com he");
	
	$scope.appTitle = "<b>AngularJS Essentials</b>";

	/*$scope.cars = [{
		id: 1,
		plate: "6MBV006",
		color: "Blue",
		entrance: "2013-12-09T23:46:15.186Z"
	},{
		id: 2,
		plate: "6MBV009",
		color: "Gray",
		entrance: "2013-12-09T23:46:15.186Z"
	},{
		id: 3,
		plate: "6MBV116",
		color: "Green",
		entrance: "2013-12-09T23:46:15.186Z"
	}];*/

	$scope.cars = [];
	
	$scope.colors = ["Gray", "Blue", "Green"];
	
	$scope.alertTopic = "<strong>Some thing went wrong</strong>";
	$scope.alertDescription = "<strong>You much inform the plate and the color of the car.</strong>";

	$scope.park = function(car){	
		car.entrance = new Date();
		$scope.cars.push(car);
		delete $scope.car;
	};	

	$scope.showAlert = true;
	$scope.closeAlert = function(){
		$scope.showAlert = false;
	};

	$scope.partCar = function(car){
		parkingHttpFacade.saveCar(car).
		success(function(data, status, headers, config){
			retrieveCars();
			$scope.message = "The car was parking successfully";
		}).
		error(function(data, status, headers, config){
			switch(status){
				case 401:{
					$scope.message = "You must be authenticated.";
					break;	
				}
				case 500:{
					$scope.message = "Something went wrong.";
					break;
				}			
			}
			console.log(data, status);
		});
	};

	$scope.calculateTicket = function(car){
		$scope.ticket = parkingService.calculateTicket(car);
	};

	var retrieveCars = function(){
		parkingHttpFacade.getCars().
		success(function(data, status, headers, config){
			console.log(data);
			$scope.cars = data;
		}).
		error(function(data, status, headers, config){
			switch(status){
				case 401:{
					$scope.message = "You must be authenticated.";
					break;	
				}
				case 500:{
					$scope.message = "Something went wrong.";
					break;
				}			
			}

			console.log(data, status);
		});
	};

	retrieveCars();
});