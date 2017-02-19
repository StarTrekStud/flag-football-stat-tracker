var myApp = angular.module('myApp');

myApp.controller('SchedulesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('SchedulesController loaded...');

    $scope.schedules = null;
    $scope.scheduleList = [];

    $http({
            method: 'GET',
            url: '/api/schedules',
            data: { applicationId: 3 }
        }).success(function (response) {
        $scope.scheduleList = response;
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