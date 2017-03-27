var mongoose = require('mongoose');

// Result Schema
var resultSchema = mongoose.Schema({
	result_names:{
		type: String,
        required: true
	},
	offense:{
		type: Boolean
	},
	defense:{
		type: Boolean
	},
	create_date:{
		type: String
	}
});

resultSchema.pre('save', function(next) {
  this.create_date = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  next();
});

var Result = module.exports = mongoose.model('Result', resultSchema);

// Get Results
module.exports.getResults = function(callback, limit){
	Result.find(callback).limit(limit);
}

// Get Result
module.exports.getResultById = function(id, callback){
	Result.findById(id, callback);
}

/*
// Add Result
module.exports.addResult = function(result, callback){
	Result.create(result, callback);
}

// Update Result
module.exports.updateResult = function(id, result, options, callback){
	var query = {_id: id};
	var update = {
		schedules: result.schedules,
		first_resulters: result.first_resulters,
		second_resulters: result.second_resulters,
		results: result.results
	}
	Result.findOneAndUpdate(query, update, options, callback);
}

// Delete Result
module.exports.removeResult = function(id, callback){
	var query = {_id: id};
	Result.remove(query, callback);
}
*/