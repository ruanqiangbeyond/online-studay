var myApp = angular.module('myApp', []);
myApp.controller('listCtrl', function($scope) {
	$scope.logchore = function(x) {
		alert(x);
	};
});

myApp.directive('kid', function() {
	return {
		'restrict': 'E',
		scope: {
			flavor: "&"
		},
		template: '<div ><input ng-model="v"><button ng-click="flavor({t:v})">&&&&</button></div>'

	}
});