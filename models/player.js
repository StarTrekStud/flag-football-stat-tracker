var mongoose = require('mongoose');

// Player Schema
var playerSchema = mongoose.Schema({
	teams:{
		type: String,
		required: true
	},
	full_names:{
		type: String,
		required: true
	},
	heights:{
		type: String,
		required: true
	},
	weights:{
		type: String,
		required: true
	},
	birth_dates:{
		type: String,
		required: true
	},
	birth_places:{
		type: String,
		required: true
	},
	colleges:{
		type: String,
		required: true
	},
	joined_vsp_dates:{
		type: String,
		required: true
	},
	joined_league_dates:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Player = module.exports = mongoose.model('Player', playerSchema);

// Get Players
module.exports.getPlayers = function(callback, limit){
	Player.find(callback).limit(limit);
}

// Get Player
module.exports.getPlayerById = function(id, callback){
	Player.findById(id, callback);
}

// Add Player
module.exports.addPlayer = function(player, callback){
	Player.create(player, callback);
}

// Update Player
module.exports.updatePlayer = function(id, player, options, callback){
	var query = {_id: id};
	var update = {
		full_names: player.full_names,
		heights: player.heights,
		weights: player.weights,
		birth_dates: player.birth_dates,
		birth_places: player.birth_places,
		colleges: player.colleges,
		joined_vsp_dates: player.joined_vsp_dates,
		joined_league_dates: player.joined_league_dates
	}
	Player.findOneAndUpdate(query, update, options, callback);
}

// Delete Player
module.exports.removePlayer = function(id, callback){
	var query = {_id: id};
	Player.remove(query, callback);
}