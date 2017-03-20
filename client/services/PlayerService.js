myApp.service('PlayerService', function () {

    this.players = [];
    this.plays = [];

    this.getSetPlayers = function (val) {
        if (!!val) {
            this.players = val;
        } else {
            return this.players;
        }
    }


    this.getSetPlays = function (val) {

        if (!!val) {
            this.plays = val;
            populatePlays();
        } else {
            return this.plays;
        }
    }

    function populatePlays() {
        for (var a = 0; a < this.players.length; a++) {
            var player = this.players[a];
            player.catches = 0;
        }

        for (var a = 0; a < this.plays.length; a++) {
            var play = this.plays[a];

            if(play.receiver_results === "Catch"){
                getPlayerByName(play.receivers.catches++);
            }
        }
    }

    function getPlayerByName(str) {
        for (var a = 0; a < this.players.length; a++) {
            var player = this.players[a];
            if (player.full_names === str) {
                return player;
            }
        }

        return null;
    }

    return this;

});