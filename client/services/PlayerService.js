myApp.service('PlayerService', function () {

    var players = [];
    var plays = [];
    var schedules = [];

    this.getSetSchedules = function(val){
        if(!!val){
            schedules = val;
        }else{
            return schedules;
        }
    }

    this.getSetPlayers = function (val) {
        if (!!val) {
            players = val;
        } else {
            return players;
        }
    }

    this.getSetPlays = function (val) {
        if (!!val) {
            plays = val;
            populatePlays();
        } else {
            return plays;
        }
    }

    function populatePlays() {
        for (var a = 0; a < players.length; a++) {
            var player = players[a];
            player.stats = {};
            player.stats.incompletes = 0;
            player.stats.throws = 0;
            player.stats.catches = 0;
            player.stats.misses = 0;
            player.stats.drops = 0;
            player.stats.onepoints = 0;
            player.stats.twopoints = 0;
            player.stats.touchdowns = 0;
            player.stats.interceptions = 0;
            player.stats.safeties = 0;
            player.stats.sacks = 0;
            player.stats.tackles = 0;
        }

        for (var a = 0; a < plays.length; a++) {
            var play = plays[a];
            if(play.receiver_results === "Catch"){
                getPlayerByName(play.receivers).stats.catches++;
            }

            if(play.receiver_results === "Miss"){
                getPlayerByName(play.receivers).stats.misses++;
            }

            if(play.receiver_results === "Drop"){
                getPlayerByName(play.receivers).stats.drops++;
            }

            if(play.receiver_results === "1 Point"){
                getPlayerByName(play.receivers).stats.onepoints++;
            }

            if(play.receiver_results === "2 Point"){
                getPlayerByName(play.receivers).stats.twopoints++;
            }

            if(play.receiver_results === "Interception"){
                getPlayerByName(play.receivers).stats.interceptions++;
            }

            if(play.receiver_results === "Safety"){
                getPlayerByName(play.receivers).stats.safeties++;
            }

            if(play.receiver_results === "Sack"){
                getPlayerByName(play.receivers).stats.sacks++;
            }

            if(play.defender_results === "Tackle"){
                getPlayerByName(play.defenders).stats.tackles++;
            }
        }
    }

    getPlayerByName = function(str) {
        for (var a = 0; a < players.length; a++) {
            var player = players[a];
            if (player.full_names === str) {
                return player;
            }
        }
        return null;
    }

    return this;

});