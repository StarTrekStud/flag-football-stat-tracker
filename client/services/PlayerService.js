myApp.service('PlayerService', function(){

    this.players = [];
    this.plays = [];

    this.getSetPlayers = function(val){
        if(!!val){
            this.players = val;
        }else{
            return this.players;
        }
    }


    this.getSetPlays = function(val){
        if(!!val){
            this.plays = val;
        }else{
            return this.plays;
        }
    }

    return this;

});