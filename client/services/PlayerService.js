myApp.service('PlayerService', function(){

    this.players;
    this.plays;

    function getSetPlayers(val){
        if(!!val){
            this.players = val;
        }else{
            return this.players;
        }
    }


    function getSetPlays(val){
        if(!!val){
            this.plays = val;
        }else{
            return this.plays;
        }
    }

    return this;

});