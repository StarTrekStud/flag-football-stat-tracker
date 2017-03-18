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
	receiver_teams:{
	    type: String
	},
	receivers:{
		type: String
	},
	receiver_results:{
		type: String
	},
	defender_teams:{
	    type: String
	},
	defenders:{
	    type: String
	},
	defender_results:{
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
		receiver_teams: play.receiver_teams,
		receivers: play.receivers,
		receiver_results: play.receiver_results,
		defender_teams: play.defender_teams,
		defenders: play.defenders,
		defender_results: play.defender_results
	}
	Play.findOneAndUpdate(query, update, options, callback);
}

// Delete Play
module.exports.removePlay = function(id, callback){
	var query = {_id: id};
	Play.remove(query, callback);
}