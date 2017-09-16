/**
 * Created by LAOHUTU on 2017/9/2.
 */
var app = angular.module('appFactoryModule', []);

app.factory('factoryTest3', function() {
    return {
        title: function(title) {
        	return title;
        }
    };
});
