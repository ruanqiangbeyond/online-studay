var app = angular.module('app.service', []);
app.factory('getImageInfo', function($http, $q) {
	return {
		setImage: function(imageUrl) {
			return imageUrl;
		},
		detailImage: function() {
			var deferred = $q.defer();
		    $http.get('imageData.json').success(function(data) {
		    	deferred.resolve(data);
		    });
		    
		    return deferred.promise;
		}
	}
})