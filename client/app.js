var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){

	$routeProvider.when('/', {
		controller:'PlaysController',
		templateUrl: 'views/statistics.html'
	})

	.when('/admins', {
		controller:'PlaysController',
		templateUrl: 'views/administration.html'
	})

	.when('/statistics', {
		controller:'PlaysController',
		templateUrl: 'views/statistics.html'
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



	.when('/teams', {
		controller:'TeamsController',
		templateUrl: 'views/teams.html'
	})
	.when('/teams/details/:id',{
		controller:'TeamsController',
		templateUrl: 'views/team_details.html'
	})
	.when('/teams/add',{
		controller:'TeamsController',
		templateUrl: 'views/add_team.html'
	})
	.when('/teams/edit/:id',{
		controller:'TeamsController',
		templateUrl: 'views/edit_team.html'
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



	.when('/results', {
		controller:'ResultsController',
		templateUrl: 'views/results.html'
	})
	.when('/results/details/:id',{
		controller:'ResultsController',
		templateUrl: 'views/result_details.html'
	})
	.when('/results/add',{
		controller:'ResultsController',
		templateUrl: 'views/add_result.html'
	})
	.when('/results/edit/:id',{
		controller:'ResultsController',
		templateUrl: 'views/edit_result.html'
	})



	.otherwise({
		redirectTo: '/'
	});

});