var mongoose = require('mongoose');

// Play Schema
var playSchema = mongoose.Schema({
	schedules:{
		type: String,
        required: true
	},
	quarterbacks:{
		type: String
	},
	offensive_players:{
		type: String
	},
	offensive_results:{
		type: String
	},
	defensive_players:{
	    type: String
	},
	defensive_results:{
		type: String
	},
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
		quarterbacks: play.quarterbacks,
		offensive_players: play.offensive_players,
		offensive_results: play.offensive_results,
		defensive_players: play.defensive_players,
		defensive_results: play.defensive_results
	}
	Play.findOneAndUpdate(query, update, options, callback);
}

// Delete Play
module.exports.removePlay = function(id, callback){
	var query = {_id: id};
	Play.remove(query, callback);
}