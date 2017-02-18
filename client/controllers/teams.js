var myApp = angular.module('myApp');

myApp.controller('TeamsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('TeamsController loaded...');

	$scope.getTeams = function(){
		$http.get('/api/teams').success(function(response){
			$scope.teams = response;
		});
	}

	$scope.getTeam = function(){
		var id = $routeParams.id;
		$http.get('/api/teams/'+id).success(function(response){
			$scope.team = response;
		});
	}

	$scope.addTeam = function(){
		console.log($scope.team);
		$http.post('/api/teams/', $scope.team).success(function(response){
			window.location.href='#/teams';
		});
	}

	$scope.updateTeam = function(){
		var id = $routeParams.id;
		$http.put('/api/teams/'+id, $scope.team).success(function(response){
			window.location.href='#/teams';
		});
	}

	$scope.removeTeam = function(id){
		$http.delete('/api/teams/'+id).success(function(response){
			window.location.href='#/teams';
		});
	}
}]);