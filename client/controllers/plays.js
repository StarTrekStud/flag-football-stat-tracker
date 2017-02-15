var myApp = angular.module('myApp');

myApp.controller('PlaysController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('PlaysController loaded...');

	$scope.getPlays = function(){
		$http.get('/api/plays').success(function(response){
			$scope.plays = response;
		});
	}

	$scope.getPlay = function(){
		var id = $routeParams.id;
		$http.get('/api/plays/'+id).success(function(response){
			$scope.play = response;
		});
	}

	$scope.addPlay = function(){
		console.log($scope.play);
		$http.post('/api/plays/', $scope.play).success(function(response){
			window.location.href='#/plays';
			window.location.reload();
		});
	}

	$scope.updatePlay = function(){
		var id = $routeParams.id;
		$http.put('/api/plays/'+id, $scope.play).success(function(response){
			window.location.href='#/plays';
		});
	}

	$scope.removePlay = function(id){
		$http.delete('/api/plays/'+id).success(function(response){
			window.location.href='#/plays';
		});
	}

	$scope.getPlayers = function(){
		$http.get('/api/players').success(function(response){
			$scope.players = response;
		});
	}

	$scope.getPlayer = function(){
		var id = $routeParams.id;
		$http.get('/api/players/'+id).success(function(response){
			$scope.player = response;
		});
	}

	$scope.addPlayer = function(){
		console.log($scope.player);
		$http.post('/api/players/', $scope.player).success(function(response){
			window.location.href='#/players';
			window.location.reload();
		});
	}

	$scope.updatePlayer = function(){
		var id = $routeParams.id;
		$http.put('/api/players/'+id, $scope.player).success(function(response){
			window.location.href='#/players';
		});
	}

	$scope.removePlayer = function(id){
		$http.delete('/api/players/'+id).success(function(response){
			window.location.href='#/players';
		});
	}

}]);