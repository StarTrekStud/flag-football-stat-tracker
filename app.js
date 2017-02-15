var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Book =require('./models/book');
Magazine =require('./models/magazine')

// Connect to Mongoose
mongoose.connect('mongodb://heroku_n5zsjf7c:heroku_n5zsjf7c@ds151289.mlab.com:51289/heroku_n5zsjf7c');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/books');
});

app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id', function(req, res){
	Book.getBookById(req.params._id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/books', function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.put('/api/books/:_id', function(req, res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/books/:_id', function(req, res){
	var id = req.params._id;
	Book.removeBook(id, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.get('/api/magazines', function(req, res){
	Magazine.getMagazines(function(err, magazines){
		if(err){
			throw err;
		}
		res.json(magazines);
	});
});

app.get('/api/magazines/:_id', function(req, res){
	Magazine.getMagazineById(req.params._id, function(err, magazine){
		if(err){
			throw err;
		}
		res.json(magazine);
	});
});

app.post('/api/magazines', function(req, res){
	var magazine = req.body;
	Magazine.addMagazine(magazine, function(err, magazine){
		if(err){
			throw err;
		}
		res.json(magazine);
	});
});

app.put('/api/magazines/:_id', function(req, res){
	var id = req.params._id;
	var magazine = req.body;
	Magazine.updateMagazine(id, magazine, {}, function(err, magazine){
		if(err){
			throw err;
		}
		res.json(magazine);
	});
});

app.delete('/api/magazines/:_id', function(req, res){
	var id = req.params._id;
	Magazine.removeMagazine(id, function(err, magazine){
		if(err){
			throw err;
		}
		res.json(magazine);
	});
});

//app.listen(3000);
//console.log('Running on port 3000...');

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});