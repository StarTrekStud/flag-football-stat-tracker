var myApp = angular.module('myApp');

myApp.controller('StatsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('StatsController loaded...');

    $scope.stats = null;
    $scope.statList = [];

    $http({
            method: 'GET',
            url: '/api/stats',
            data: { applicationId: 3 }
        }).success(function (response) {
        $scope.statList = response;
    });

	$scope.getStats = function(){
		$http.get('/api/stats').success(function(response){
			$scope.stats = response;
		});
	}

	$scope.getStat = function(){
		var id = $routeParams.id;
		$http.get('/api/stats/'+id).success(function(response){
			$scope.stat = response;
		});
	}

	$scope.addStat = function(){
		console.log($scope.stat);
		$http.post('/api/stats/', $scope.stat).success(function(response){
			window.location.href='#/stats';
		});
	}

	$scope.updateStat = function(){
		var id = $routeParams.id;
		$http.put('/api/stats/'+id, $scope.stat).success(function(response){
			window.location.href='#/stats';
		});
	}

	$scope.removeStat = function(id){
		$http.delete('/api/stats/'+id).success(function(response){
			window.location.href='#/stats';
		});
	}
}]);