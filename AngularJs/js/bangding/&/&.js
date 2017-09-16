var myApp = angular.module('myApp', []);
myApp.controller('listCtrl', function($scope) {
	$scope.logchore = function() {
		alert('ok');
	};
});

myApp.directive('kid', function() {
	return {
		'restrict': 'E',
		scope: {
			flavor: "&"
		},
		template: '<div ><button ng-click="flavor()">&&&&</button></div>'

	}
});