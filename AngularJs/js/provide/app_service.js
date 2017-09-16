angular.module('appService', [])
.service('serviceService', function() {
	this.name = 'ruanqiang';
	this.setName = function(name) {
		this.name = name;
	}
});


//使用时，内部其实是构造函数，而factory不是构造函数，只是普通函数而已