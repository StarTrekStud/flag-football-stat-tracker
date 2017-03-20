var mongoose = require('mongoose');

// Stat Schema
var statSchema = mongoose.Schema({
	seasons:{
		type: String
	},
	schedules:{
		type: String
	},
	team_names:{
		type: String
	},
	full_names:{
		type: String
	},
	throws:{
		type: Number
	},
	completions:{
		type: Number
	},
	thrown_one_points:{
		type: Number
	},
	thrown_two_points:{
		type: Number
	},
	thrown_touchdowns:{
		type: Number
	},
	thrown_interceptions:{
		type: Number
	},
	sacks_taken:{
		type: Number
	},
	catches:{
		type: Number
	},
	drops:{
		type: Number
	},
	one_points:{
		type: Number
	},
	two_points:{
		type: Number
	},
	touchdowns:{
		type: Number
	},
	interceptions:{
		type: Number
	},
	safeties:{
		type: Number
	},
	sacks:{
		type: Number
	},
	tackles:{
		type: Number
	},
	create_date:{
		type: String
	}
});

statSchema.pre('save', function(next) {
  this.create_date = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  next();
});

var Stat = module.exports = mongoose.model('Stat', statSchema);

// Get Stats
module.exports.getStats = function(callback, limit){
	Stat.find(callback).limit(limit);
}

// Get Stat
module.exports.getStatById = function(id, callback){
	Stat.findById(id, callback);
}

// Add Stat
module.exports.addStat = function(stat, callback){
	Stat.create(stat, callback);
}

// Update Stat
module.exports.updateStat = function(id, stat, options, callback){
	var query = {_id: id};
	var update = {
		seasons: stat.seasons,
		schedules: stat.schedules,
		team_names: stat.team_names,
		full_names: stat.full_names,
		throws: stat.throws,
		completions: stat.completions,
		thrown_one_points: stat.thrown_one_points,
		thrown_two_points: stat.thrown_two_points,
		thrown_touchdowns: stat.thrown_touchdowns,
		thrown_interceptions: stat.thrown_interceptions,
		sacks_taken: stat.sacks_taken,
		catches: stat.catches,
		drops: stat.drops,
		one_points: stat.one_points,
		two_points: stat.two_points,
		touchdowns: stat.touchdowns,
		interceptions: stat.interceptions,
		safeties: stat.safeties,
		sacks: stat.sacks,
		tackles: stat.tackles
	}
	Stat.findOneAndUpdate(query, update, options, callback);
}

// Delete Stat
module.exports.removeStat = function(id, callback){
	var query = {_id: id};
	Stat.remove(query, callback);
}