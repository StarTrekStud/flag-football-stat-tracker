myApp.controller('PlaysController', ['$scope', '$filter', '$http', '$location', '$routeParams', 'PlayerService', function ($scope, $filter, $http, $location, $routeParams, playerService) {
    console.log('PlaysController loaded...');

    $scope.formattedDate = $filter('date')(new Date(), 'M/d/yyyy');
    $scope.formattedTime = $filter('date')(new Date(), 'h');
    $scope.playerService = playerService;

    $scope.teamFilter = 'All';
    $scope.nameFilter = '';
    $scope.selected = 'All';
    $scope.sort = 'names';

    $http.get('/api/players').success(function (response) {
        $scope.players = response;
        playerService.getSetPlayers(response);

        $http.get('/api/plays').success(function (response) {
            $scope.plays = response;
            playerService.getSetPlays(response);
        });
    });

    $scope.getPlayers = function () {
        return playerService.getSetPlayers();
    }

    $scope.getPlays = function () {
        return playerService.getSetPlayers();
    }

    $scope.players = null;
    $scope.playerList = [];

    $http({
        method: 'GET',
        url: '/api/players',
        data: {applicationId: 3}
    }).success(function (response) {
        $scope.playerList = response;
    });

    $scope.teams = null;
    $scope.teamList = [];

    $http({
        method: 'GET',
        url: '/api/teams',
        data: {applicationId: 3}
    }).success(function (response) {
        $scope.teamList = response;
    });

    $http.get('/api/schedules').success(function(response){
        $scope.schedules = response;
    });

    $scope.schedules = null;
    $scope.scheduleList = [];

    $http({
        method: 'GET',
        url: '/api/schedules',
        data: {applicationId: 3}
    }).success(function (response) {
        $scope.scheduleList = response;
    });

    $scope.results = null;
    $scope.resultList = [];

    $http({
        method: 'GET',
        url: '/api/results',
        data: {applicationId: 3}
    }).success(function (response) {
        $scope.resultList = response;
    });

    $scope.getPlay = function () {
        var id = $routeParams.id;
        $http.get('/api/plays/' + id).success(function (response) {
            $scope.play = response;
        });
    }

    $scope.addPlay = function () {
        console.log($scope.play);
        $http.post('/api/plays/', $scope.play).success(function (response) {
            window.location.href = '#/plays/add';
            window.location.reload();
        });
    }

    $scope.updatePlay = function () {
        var id = $routeParams.id;
        $http.put('/api/plays/' + id, $scope.play).success(function (response) {
            window.location.href = '#/plays';
        });
    }

    $scope.removePlay = function (id) {
        $http.delete('/api/plays/' + id).success(function (response) {
            window.location.href = '#/plays';
        });
    }

    $scope.getFilteredPlayers = function () {
        if ($scope.selected === 'All') {
            return playerService.getSetPlayers();
        } else {
            for (var a = 0; a < playerService.getSetPlayers().length; a++) {
                if (playerService.getSetPlayers()[a].full_names === $scope.selected) {
                    return [playerService.getSetPlayers()[a]];
                }
            }


            return null;
        }
    }

    $scope.getAllStatsOptions = function () {
        var list = [];

        for (var a = 0; a < playerService.getSetPlayers().length; a++) {
            var player = playerService.getSetPlayers()[a];
            if(!!player.stats){
                var keys = Object.keys(player.stats);
                for (var b = 0; b < keys.length; b++) {
                    var key = keys[b];
                    if (list.indexOf(key) == -1) {
                        list.push(key);
                    }
                }
            }
        }
        return list;
    }

    $scope.getOrderBy = function () {

        var orderBys = [];

        if ($scope.sort !== 'names') {
            orderBys.push('-stats.' + $scope.sort);
        }


        orderBys.push('full_names');
        return orderBys;
    }

    $scope.getStats = function (player) {
        if ($scope.sort === 'names') {
            return !!player.stats ? Object.keys(player.stats) : [];
        } else {
            return [$scope.sort];
        }
    };

    $scope.getTeamNames = function(){
        var teamList = [];
        for(var a = 0; a < playerService.getSetPlayers().length; a++){
            var player = playerService.getSetPlayers()[a];
            var teamName = player["team_names"];
            if(teamList.indexOf(teamName) == -1){
                teamList.push(teamName);
            }
        }
        return teamList;
    }

    $scope.filterResults = function(){
        var filterObj = {};

        if($scope.teamFilter !== 'All'){
            filterObj['team_names'] = $scope.teamFilter;
        }

        return filterObj;
    }

}]);