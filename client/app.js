var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'PlaysController',
		templateUrl: 'views/plays.html'
	})
	.when('/plays', {
		controller:'PlaysController',
		templateUrl: 'views/plays.html'
	})
	.when('/plays/details/:id',{
		controller:'PlaysController',
		templateUrl: 'views/play_details.html'
	})
	.when('/plays/add',{
		controller:'PlaysController',
		templateUrl: 'views/add_play.html'
	})
	.when('/plays/edit/:id',{
		controller:'PlaysController',
		templateUrl: 'views/edit_play.html'
	})
	.when('/players', {
		controller:'PlayersController',
		templateUrl: 'views/players.html'
	})
	.when('/players/details/:id',{
		controller:'PlayersController',
		templateUrl: 'views/player_details.html'
	})
	.when('/players/add',{
		controller:'PlayersController',
		templateUrl: 'views/add_player.html'
	})
	.when('/players/edit/:id',{
		controller:'PlayersController',
		templateUrl: 'views/edit_player.html'
	})
	.when('/schedules', {
		controller:'SchedulesController',
		templateUrl: 'views/schedules.html'
	})
	.when('/schedules/details/:id',{
		controller:'SchedulesController',
		templateUrl: 'views/schedule_details.html'
	})
	.when('/schedules/add',{
		controller:'SchedulesController',
		templateUrl: 'views/add_schedule.html'
	})
	.when('/schedules/edit/:id',{
		controller:'SchedulesController',
		templateUrl: 'views/edit_schedule.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});