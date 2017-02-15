var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'PlaysController',
		templateUrl: 'views/plays.html'
	})
	.when('/stats', {
    	controller:'PlaysController',
    	templateUrl: 'views/view_stats.html'
    })
	.when('/plays', {
		controller:'PlaysController',
		templateUrl: 'views/plays.html'
	})
	.when('/players', {
		controller:'PlaysController',
		templateUrl: 'views/players.html'
	})
	.when('/plays/details/:id',{
		controller:'PlaysController',
		templateUrl: 'views/play_details.html'
	})
	.when('/players/details/:id',{
		controller:'PlaysController',
		templateUrl: 'views/player_details.html'
	})
	.when('/plays/add',{
		controller:'PlaysController',
		templateUrl: 'views/add_play.html'
	})
	.when('/players/add',{
		controller:'PlaysController',
		templateUrl: 'views/add_player.html'
	})
	.when('/plays/edit/:id',{
		controller:'PlaysController',
		templateUrl: 'views/edit_play.html'
	})
	.when('/players/edit/:id',{
		controller:'PlaysController',
		templateUrl: 'views/edit_player.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});