//那么我们什么时候应该使用service呢？答案是：无论何时，当我们需要在不同的域中共享数据的时候。
//另外，多亏了Angular的依赖注入系统，实现这一点是很容易并且很清晰的。
module.service('Book', ['$rootScope', function(rootScope) {
	var service = {
		books: [{
				title: "Magician",
				author: "Raymond E. Feist"
			},
			{
				title: "The Hobbit",
				author: "J.R.R Tolkien"
			}
		],

		addBook: function(book) {
			service.books.push(book);
			rootScope.$broadcast('books.update');
		}
	}
	return service;
}]);