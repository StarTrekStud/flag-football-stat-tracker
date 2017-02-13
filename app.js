var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Book =require('./models/book');

// Connect to Mongoose
mongoose.connect('mongodb://readersparadise_ag:rpag@ds139655.mlab.com:39655/readersparadise-ag');
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

//app.listen(3000);
//console.log('Running on port 3000...');

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});