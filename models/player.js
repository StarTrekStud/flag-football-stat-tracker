var mongoose = require('mongoose');

// Player Schema
var playerSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
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
		title: player.title,
		genre: player.genre,
		description: player.description,
		author: player.author,
		publisher: player.publisher,
		pages: player.pages,
		image_url: player.image_url,
		buy_url: player.buy_url
	}
	Player.findOneAndUpdate(query, update, options, callback);
}

// Delete Player
module.exports.removePlayer = function(id, callback){
	var query = {_id: id};
	Player.remove(query, callback);
}