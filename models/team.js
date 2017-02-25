var mongoose = require('mongoose');

// Team Schema
var teamSchema = mongoose.Schema({
	team_names:{
		type: String,
        required: true
	},
	team_colors:{
		type: String
	},
	team_mascots:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Team = module.exports = mongoose.model('Team', teamSchema);

// Get Teams
module.exports.getTeams = function(callback, limit){
	Team.find(callback).limit(limit);
}

// Get Team
module.exports.getTeamById = function(id, callback){
	Team.findById(id, callback);
}

// Add Team
module.exports.addTeam = function(team, callback){
	Team.create(team, callback);
}

// Update Team
module.exports.updateTeam = function(id, team, options, callback){
	var query = {_id: id};
	var update = {
		team_names: team.team_names,
		team_colors: team.team_colors,
		team_mascots: team.team_mascots
	}
	Team.findOneAndUpdate(query, update, options, callback);
}

// Delete Team
module.exports.removeTeam = function(id, callback){
	var query = {_id: id};
	Team.remove(query, callback);
}