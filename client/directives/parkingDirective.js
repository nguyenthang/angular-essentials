'use strict';
parkingApp.directive('alert', function(){
	return {
		restrict: 'A',
		templateUrl: 'directives/alert.directive.html',
		scope: {
			topic: "=topic",
			description: "=description",
			close: '&close'
		},
		replace: true,
		transclude: true		
	};
	
});

/*parkingApp.directive('accordion', function(){
	return {
		template: "<div ng-transclude></div>",
		restrict: 'E',
		transclude: true,
		controller: function($scope, $element, $attrs, $transcludeFn){
			var accordionItems = [];

			var addAccorditionItem = function(accordionItem){
				accordionItems.push(accordionItem);
			};

			var closeAllItem = function(){
				angular.forEach(accordionItems, function(accorditionScope){
					accorditionScope.active = false;
				});
			};

			return {
				addAccorditionItem : addAccorditionItem,
				closeAllItem : closeAllItem
			};
		}
	};
});

parkingApp.directive('accordionItem', function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/accordionItem.directive.html',
		scope: {
			title: '@'
		},
		transclude: true,
		required: "^accordion",
		link: function(scope, element, attrs, ctrl, transcludeFn){
			ctrl.addAccorditionItem(scope),
			element.bind("click", function(){
				ctrl.closeAllItem(),
				scope.$apply(function(){
					scope.active = !scope.active;
				});
			});
		}
	};
});*/