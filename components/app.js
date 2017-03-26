var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){

	$routeProvider.when('/', {
		controller:'PlaysController',
		templateUrl: 'stats/statistics.html'
	})

	.when('/admins', {
		controller:'PlaysController',
		templateUrl: 'admins/administration.html'
	})

	.when('/statistics', {
		controller:'PlaysController',
		templateUrl: 'stats/statistics.html'
	})



	.when('/plays', {
		controller:'PlaysController',
		templateUrl: 'plays/plays.html'
	})
	.when('/plays/details/:id',{
		controller:'PlaysController',
		templateUrl: 'plays/play_details.html'
	})
	.when('/plays/add',{
		controller:'PlaysController',
		templateUrl: 'plays/add_play.html'
	})
	.when('/plays/edit/:id',{
		controller:'PlaysController',
		templateUrl: 'plays/edit_play.html'
	})



	.when('/players', {
		controller:'PlayersController',
		templateUrl: 'players/players.html'
	})
	.when('/players/details/:id',{
		controller:'PlayersController',
		templateUrl: 'players/player_details.html'
	})
	.when('/players/add',{
		controller:'PlayersController',
		templateUrl: 'players/add_player.html'
	})
	.when('/players/edit/:id',{
		controller:'PlayersController',
		templateUrl: 'players/edit_player.html'
	})



	.when('/teams', {
		controller:'TeamsController',
		templateUrl: 'teams/teams.html'
	})
	.when('/teams/details/:id',{
		controller:'TeamsController',
		templateUrl: 'teams/team_details.html'
	})
	.when('/teams/add',{
		controller:'TeamsController',
		templateUrl: 'teams/add_team.html'
	})
	.when('/teams/edit/:id',{
		controller:'TeamsController',
		templateUrl: 'teams/edit_team.html'
	})



	.when('/schedules', {
		controller:'SchedulesController',
		templateUrl: 'schedules/schedules.html'
	})
	.when('/schedules/details/:id',{
		controller:'SchedulesController',
		templateUrl: 'schedules/schedule_details.html'
	})
	.when('/schedules/add',{
		controller:'SchedulesController',
		templateUrl: 'schedules/add_schedule.html'
	})
	.when('/schedules/edit/:id',{
		controller:'SchedulesController',
		templateUrl: 'schedules/edit_schedule.html'
	})



	.when('/results', {
		controller:'ResultsController',
		templateUrl: 'results/results.html'
	})
	.when('/results/details/:id',{
		controller:'ResultsController',
		templateUrl: 'results/result_details.html'
	})
	.when('/results/add',{
		controller:'ResultsController',
		templateUrl: 'results/add_result.html'
	})
	.when('/results/edit/:id',{
		controller:'ResultsController',
		templateUrl: 'results/edit_result.html'
	})



	.otherwise({
		redirectTo: '/'
	});

});