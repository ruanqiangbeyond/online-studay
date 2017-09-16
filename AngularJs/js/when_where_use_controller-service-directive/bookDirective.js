//很简单的东西。我们创建了一个指令，它的核心目的是简单地向books列表中添加一本书籍，
//books已经注册在了我们的Book服务中。我们来把这个指令应用到我们的视图中。

module.directive( "addBookButton", [ 'Book', function( Book ) {
    return {
        restrict: "E",
            link: function( scope, element, attrs ) {
            element.on( "click", function() {
                Book.addBook( { title: "Star Wars", author: "George Lucas" } );
            });
        }
    }
}]);