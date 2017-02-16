var mongoose = require('mongoose');

// Schedule Schema
var scheduleSchema = mongoose.Schema({
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