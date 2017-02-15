var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Play =require('./models/play');
Player =require('./models/player')

// Connect to Mongoose
mongoose.connect('mongodb://heroku_n5zsjf7c:heroku_n5zsjf7c@ds151289.mlab.com:51289/heroku_n5zsjf7c');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/plays');
});

app.get('/api/plays', function(req, res){
	Play.getPlays(function(err, plays){
		if(err){
			throw err;
		}
		res.json(plays);
	});
});

app.get('/api/plays/:_id', function(req, res){
	Play.getPlayById(req.params._id, function(err, play){
		if(err){
			throw err;
		}
		res.json(play);
	});
});

app.post('/api/plays', function(req, res){
	var play = req.body;
	Play.addPlay(play, function(err, play){
		if(err){
			throw err;
		}
		res.json(play);
	});
});

app.put('/api/plays/:_id', function(req, res){
	var id = req.params._id;
	var play = req.body;
	Play.updatePlay(id, play, {}, function(err, play){
		if(err){
			throw err;
		}
		res.json(play);
	});
});

app.delete('/api/plays/:_id', function(req, res){
	var id = req.params._id;
	Play.removePlay(id, function(err, play){
		if(err){
			throw err;
		}
		res.json(play);
	});
});

app.get('/api/players', function(req, res){
	Player.getPlayers(function(err, players){
		if(err){
			throw err;
		}
		res.json(players);
	});
});

app.get('/api/players/:_id', function(req, res){
	Player.getPlayerById(req.params._id, function(err, player){
		if(err){
			throw err;
		}
		res.json(player);
	});
});

app.post('/api/players', function(req, res){
	var player = req.body;
	Player.addPlayer(player, function(err, player){
		if(err){
			throw err;
		}
		res.json(player);
	});
});

app.put('/api/players/:_id', function(req, res){
	var id = req.params._id;
	var player = req.body;
	Player.updatePlayer(id, player, {}, function(err, player){
		if(err){
			throw err;
		}
		res.json(player);
	});
});

app.delete('/api/players/:_id', function(req, res){
	var id = req.params._id;
	Player.removePlayer(id, function(err, player){
		if(err){
			throw err;
		}
		res.json(player);
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