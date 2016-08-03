'use strict';
parkingApp.directive('alert', function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/alert.directive.html',
		scope: {
			topic: "=topic",
			description: "=description"
		},
		replace: true
	};
	
});