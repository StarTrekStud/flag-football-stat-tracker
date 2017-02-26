var mongoose = require('mongoose');

// Player Schema
var playerSchema = mongoose.Schema({
	team_names:{
		type: String,
        required: true
	},
	full_names:{
		type: String,
        required: true
	},
	positions:{
		type: String,
        required: true
	},
	heights:{
		type: Number,
        required: true
	},
	weights:{
		type: Number,
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
	schools:{
		type: String,
        required: true
	},
	joined_vsp:{
		type: String,
        required: true
	},
	joined_league:{
		type: String,
        required: true
	},
	create_date:{
		type: String,
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
	    team_names: player.team_names,
		full_names: player.full_names,
		positions: player.positions,
		heights: player.heights,
		weights: player.weights,
		birth_dates: player.birth_dates,
		birth_places: player.birth_places,
		schools: player.schools,
		joined_vsp: player.joined_vsp,
		joined_league: player.joined_league
	}
	Player.findOneAndUpdate(query, update, options, callback);
}

// Delete Player
module.exports.removePlayer = function(id, callback){
	var query = {_id: id};
	Player.remove(query, callback);
}