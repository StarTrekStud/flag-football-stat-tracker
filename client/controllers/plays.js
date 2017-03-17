var myApp = angular.module('myApp');

myApp.controller('PlaysController', ['$scope', '$filter', '$http', '$location', '$routeParams', function($scope, $filter, $http, $location, $routeParams){
	console.log('PlaysController loaded...');

    $scope.date = $filter('date')(new Date(),'M/d/yyyy, H');

	$scope.getPlayers = function(){
		$http.get('/api/players').success(function(response){
			$scope.players = response;
		});
	}

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

    $scope.schedules = null;
    $scope.scheduleList = [];

    $http({
            method: 'GET',
            url: '/api/schedules',
            data: { applicationId: 3 }
        }).success(function (response) {
        $scope.scheduleList = response;
    });

    $scope.results = null;
    $scope.resultList = [];

    $http({
            method: 'GET',
            url: '/api/results',
            data: { applicationId: 3 }
        }).success(function (response) {
        $scope.resultList = response;
    });

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
			window.location.href='#/plays/add';
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
}]);