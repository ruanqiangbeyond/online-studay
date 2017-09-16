var myApp=angular.module('myApp',[]);  
myApp.controller('listCtrl',function($scope){  
   $scope.t="motorola";  
});  
  
  
myApp.directive('kid',function(){  
    return {  
        restrict:'E',
//      replace: true,
        scope:{  
            title:"@"  
        },  
        template:'<div >{{title}}</div>'  
          
    }  
}); 