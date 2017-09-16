angular.module('app', ['app.service']).controller('ctrl', function($scope, getImageInfo) {
	$scope.setImage = function(imageName) {
		$scope.mainImageUrl = 	'images/' + imageName;
	};
	
	//列表区域，图片展示
	getImageInfo.detailImage().then(function(data) {
		$scope.phone = data;
	});
	
	//展示区域默认图片
	getImageInfo.detailImage().then(function(data) {
		$scope.mainImageUrl =  'images/' + data[0].imageName;
	});
});
