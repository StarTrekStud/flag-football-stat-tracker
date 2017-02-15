var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'views/books.html'
	})
	.when('/books', {
		controller:'BooksController',
		templateUrl: 'views/books.html'
	})
	.when('/books/details/:id',{
		controller:'BooksController',
		templateUrl: 'views/book_details.html'
	})
	.when('/books/add',{
		controller:'BooksController',
		templateUrl: 'views/add_book.html'
	})
	.when('/books/edit/:id',{
		controller:'BooksController',
		templateUrl: 'views/edit_book.html'
	})
	.when('/magazines', {
		controller:'MagazinesController',
		templateUrl: 'views/magazines.html'
	})
	.when('/magazines/details/:id',{
		controller:'MagazinesController',
		templateUrl: 'views/magazine_details.html'
	})
	.when('/magazines/add',{
		controller:'MagazinesController',
		templateUrl: 'views/add_magazine.html'
	})
	.when('/magazines/edit/:id',{
		controller:'MagazinesController',
		templateUrl: 'views/edit_magazine.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});