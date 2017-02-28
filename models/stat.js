var mongoose = require('mongoose');

// Stat Schema
var statSchema = mongoose.Schema({
	stat_names:{
		type: String,
        required: true
	},
	stat_colors:{
		type: String
	},
	stat_mascots:{
		type: String
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
		stat_names: stat.stat_names,
		stat_colors: stat.stat_colors,
		stat_mascots: stat.stat_mascots
	}
	Stat.findOneAndUpdate(query, update, options, callback);
}

// Delete Stat
module.exports.removeStat = function(id, callback){
	var query = {_id: id};
	Stat.remove(query, callback);
}