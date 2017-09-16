/**
 * Created by LAOHUTU on 2017/9/2.
 */
var app = angular.module('provideFactoryModule', []);
app.config(function($provide) {

    $provide.factory('factoryTest', function() {
       return {
           title: 'this is a title',
           name: function(name) {
               return angular.isUndefined(name) ? 'rq' : name;
           }
       }
    });
});