var myApp = angular.module('myApp');

myApp.controller('SchedulesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('SchedulesController loaded...');

    $scope.teams = null;
    $scope.testAccounts = [];

    $http({
            method: 'GET',
            url: '/api/teams',
            data: { applicationId: 3 }
        }).success(function (result) {
        $scope.testAccounts = result;
    });

	$scope.getSchedules = function(){
		$http.get('/api/schedules').success(function(response){
			$scope.schedules = response;
		});
	}

	$scope.getSchedule = function(){
		var id = $routeParams.id;
		$http.get('/api/schedules/'+id).success(function(response){
			$scope.schedule = response;
		});
	}

	$scope.addSchedule = function(){
		console.log($scope.schedule);
		$http.post('/api/schedules/', $scope.schedule).success(function(response){
			window.location.href='#/schedules';
		});
	}

	$scope.updateSchedule = function(){
		var id = $routeParams.id;
		$http.put('/api/schedules/'+id, $scope.schedule).success(function(response){
			window.location.href='#/schedules';
		});
	}

	$scope.removeSchedule = function(id){
		$http.delete('/api/schedules/'+id).success(function(response){
			window.location.href='#/schedules';
		});
	}
}]);