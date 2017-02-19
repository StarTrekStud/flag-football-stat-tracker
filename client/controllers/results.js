var myApp = angular.module('myApp');

myApp.controller('ResultsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ResultsController loaded...');

	$scope.getResults = function(){
		$http.get('/api/results').success(function(response){
			$scope.results = response;
		});
	}

	$scope.getResult = function(){
		var id = $routeParams.id;
		$http.get('/api/results/'+id).success(function(response){
			$scope.result = response;
		});
	}

	$scope.addResult = function(){
		console.log($scope.result);
		$http.post('/api/results/', $scope.result).success(function(response){
			window.location.href='#/results';
		});
	}

	$scope.updateResult = function(){
		var id = $routeParams.id;
		$http.put('/api/results/'+id, $scope.result).success(function(response){
			window.location.href='#/results';
		});
	}

	$scope.removeResult = function(id){
		$http.delete('/api/results/'+id).success(function(response){
			window.location.href='#/results';
		});
	}
}]);