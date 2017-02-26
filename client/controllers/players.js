var myApp = angular.module('myApp');

myApp.controller('PlayersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('PlayersController loaded...');

    $scope.players = null;
    $scope.playerList = [];

    $http({
            method: 'GET',
            url: '/api/players',
            data: { applicationId: 3 }
        }).success(function (response) {
        $scope.playerList = response;
    });

    $scope.teams = null;
    $scope.teamList = [];

    $http({
            method: 'GET',
            url: '/api/teams',
            data: { applicationId: 3 }
        }).success(function (response) {
        $scope.teamList = response;
    });

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