myApp.service('PlayerService', function () {

    var players = [];
    var plays = [];

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
            player.catches = 0;
            player.drops = 0;
        }

        for (var a = 0; a < plays.length; a++) {
            var play = plays[a];

            if(play.receiver_results === "Catch"){
                getPlayerByName(play.receivers).catches++;
            }else if(player.receiver_results === "Drop"){
                getPlayerByName(play.receivers).drops++;
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