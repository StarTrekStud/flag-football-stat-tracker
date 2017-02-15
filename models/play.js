var mongoose = require('mongoose');

// Play Schema
var playSchema = mongoose.Schema({
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
		title: play.title,
		genre: play.genre,
		description: play.description,
		author: play.author,
		publisher: play.publisher,
		pages: play.pages,
		image_url: play.image_url,
		buy_url: play.buy_url
	}
	Play.findOneAndUpdate(query, update, options, callback);
}

// Delete Play
module.exports.removePlay = function(id, callback){
	var query = {_id: id};
	Play.remove(query, callback);
}