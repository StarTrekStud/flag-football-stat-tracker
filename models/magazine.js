var mongoose = require('mongoose');

// Magazine Schema
var magazineSchema = mongoose.Schema({
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

var Magazine = module.exports = mongoose.model('Magazine', magazineSchema);

// Get Magazines
module.exports.getMagazines = function(callback, limit){
	Magazine.find(callback).limit(limit);
}

// Get Magazine
module.exports.getMagazineById = function(id, callback){
	Magazine.findById(id, callback);
}

// Add Magazine
module.exports.addMagazine = function(magazine, callback){
	Magazine.create(magazine, callback);
}

// Update Magazine
module.exports.updateMagazine = function(id, magazine, options, callback){
	var query = {_id: id};
	var update = {
		title: magazine.title,
		genre: magazine.genre,
		description: magazine.description,
		author: magazine.author,
		publisher: magazine.publisher,
		pages: magazine.pages,
		image_url: magazine.image_url,
		buy_url: magazine.buy_url
	}
	Magazine.findOneAndUpdate(query, update, options, callback);
}

// Delete Magazine
module.exports.removeMagazine = function(id, callback){
	var query = {_id: id};
	Magazine.remove(query, callback);
}