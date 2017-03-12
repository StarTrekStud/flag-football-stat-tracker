var mongoose = require('mongoose');

// Play Schema
var playSchema = mongoose.Schema({
	schedules:{
		type: String,
        required: true
	},
	first_players:{
		type: String
	},
	second_players:{
		type: String
	},
	third_players:{
	    type: String
	},
	second_player_results:{
		type: String
	},
	third_player_results:{
		type: String
	}
	create_date:{
		type: String
	}
});

playSchema.pre('save', function(next) {
  this.create_date = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  next();
});

var Play = module.exports = mongoose.model('Play', playSchema);

// Get Plays
module.exports.getPlays = function(callback, limit){
	Play.find(callback).limit(limit);
}

// Get Play
module.exports.getPlayById = function(id, callback){
	Play.findById(id, callback);
}

// Add Play
module.exports.addPlay = function(play, callback){
	Play.create(play, callback);
}

// Update Play
module.exports.updatePlay = function(id, play, options, callback){
	var query = {_id: id};
	var update = {
		schedules: play.schedules,
		first_players: play.first_players,
		second_players: play.second_players,
		third_players: play.third_players,
		second_player_results: play.second_player_results,
		third_player_results: play.third_player_results
	}
	Play.findOneAndUpdate(query, update, options, callback);
}

// Delete Play
module.exports.removePlay = function(id, callback){
	var query = {_id: id};
	Play.remove(query, callback);
}