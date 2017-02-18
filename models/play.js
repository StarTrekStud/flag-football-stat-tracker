var mongoose = require('mongoose');

// Play Schema
var playSchema = mongoose.Schema({
	schedules:{
		type: String,
        required: true
	},
	first_players:{
		type: String,
        required: true
	},
	second_players:{
		type: String,
        required: true
	},
	results:{
		type: String,
        required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
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
		results: play.results
	}
	Play.findOneAndUpdate(query, update, options, callback);
}

// Delete Play
module.exports.removePlay = function(id, callback){
	var query = {_id: id};
	Play.remove(query, callback);
}