myApp.controller('TeamsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('TeamsController loaded...');

    $scope.teams = null;
    $scope.teamList = [];

    $http({
            method: 'GET',
            url: '/api/teams',
            data: { applicationId: 3 }
        }).success(function (response) {
        $scope.teamList = response;
    });

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