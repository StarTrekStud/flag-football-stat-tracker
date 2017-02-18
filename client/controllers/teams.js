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