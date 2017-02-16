var mongoose = require('mongoose');

// Schedule Schema
var scheduleSchema = mongoose.Schema({
	seasons:{
		type: String,
		required: true
	},
	dates:{
		type: String,
        required: true
	},
	times:{
		type: String,
        required: true
	},
	locations:{
		type: String,
        required: true
	},
	weeks:{
		type: String,
        required: true
	},
	homes:{
		type: String,
		required: true
	},
	aways:{
		type: String,
        required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Schedule = module.exports = mongoose.model('Schedule', scheduleSchema);

// Get Schedules
module.exports.getSchedules = function(callback, limit){
	Schedule.find(callback).limit(limit);
}

// Get Schedule
module.exports.getScheduleById = function(id, callback){
	Schedule.findById(id, callback);
}

// Add Schedule
module.exports.addSchedule = function(schedule, callback){
	Schedule.create(schedule, callback);
}

// Update Schedule
module.exports.updateSchedule = function(id, schedule, options, callback){
	var query = {_id: id};
	var update = {
		title: schedule.title,
		genre: schedule.genre,
		description: schedule.description,
		author: schedule.author,
		publisher: schedule.publisher,
		pages: schedule.pages,
		image_url: schedule.image_url,
		buy_url: schedule.buy_url
	}
	Schedule.findOneAndUpdate(query, update, options, callback);
}

// Delete Schedule
module.exports.removeSchedule = function(id, callback){
	var query = {_id: id};
	Schedule.remove(query, callback);
}