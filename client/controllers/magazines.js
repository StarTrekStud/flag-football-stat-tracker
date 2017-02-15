var myApp = angular.module('myApp');

myApp.controller('MagazinesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('MagazinesController loaded...');

	$scope.getMagazines = function(){
		$http.get('/api/magazines').success(function(response){
			$scope.magazines = response;
		});
	}

	$scope.getMagazine = function(){
		var id = $routeParams.id;
		$http.get('/api/magazines/'+id).success(function(response){
			$scope.magazine = response;
		});
	}

	$scope.addMagazine = function(){
		console.log($scope.magazine);
		$http.post('/api/magazines/', $scope.magazine).success(function(response){
			window.location.href='#/magazines';
		});
	}

	$scope.updateMagazine = function(){
		var id = $routeParams.id;
		$http.put('/api/magazines/'+id, $scope.magazine).success(function(response){
			window.location.href='#/magazines';
		});
	}

	$scope.removeMagazine = function(id){
		$http.delete('/api/magazines/'+id).success(function(response){
			window.location.href='#/magazines';
		});
	}
}]);