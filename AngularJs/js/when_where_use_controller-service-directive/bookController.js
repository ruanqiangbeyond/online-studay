module.controller("books.list", ['$scope', 'Book', function(scope, Book) {
	scope.$on('books.update', function(event) {
		scope.books = Book.books;
	});
	scope.books = Book.books;
}]);