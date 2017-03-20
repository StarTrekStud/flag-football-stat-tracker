var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Team = require('./models/team');
Schedule = require('./models/schedule')
Player = require('./models/player')
Play = require('./models/play');
Result = require('./models/result');
Stat = require('./models/stat');

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/add_play');
});

app.get('/api/teams', function(req, res){
	Team.getTeams(function(err, teams){
		if(err){
			throw err;
		}
		res.json(teams);
	});
});

app.get('/api/teams/:_id', function(req, res){
	Team.getTeamById(req.params._id, function(err, team){
		if(err){
			throw err;
		}
		res.json(team);
	});
});

app.post('/api/teams', function(req, res){
	var team = req.body;
	Team.addTeam(team, function(err, team){
		if(err){
			throw err;
		}
		res.json(team);
	});
});

app.put('/api/teams/:_id', function(req, res){
	var id = req.params._id;
	var team = req.body;
	Team.updateTeam(id, team, {}, function(err, team){
		if(err){
			throw err;
		}
		res.json(team);
	});
});

app.delete('/api/teams/:_id', function(req, res){
	var id = req.params._id;
	Team.removeTeam(id, function(err, team){
		if(err){
			throw err;
		}
		res.json(team);
	});
});

app.get('/api/schedules', function(req, res){
	Schedule.getSchedules(function(err, schedules){
		if(err){
			throw err;
		}
		res.json(schedules);
	});
});

app.get('/api/schedules/:_id', function(req, res){
	Schedule.getScheduleById(req.params._id, function(err, schedule){
		if(err){
			throw err;
		}
		res.json(schedule);
	});
});

app.post('/api/schedules', function(req, res){
	var schedule = req.body;
	Schedule.addSchedule(schedule, function(err, schedule){
		if(err){
			throw err;
		}
		res.json(schedule);
	});
});

app.put('/api/schedules/:_id', function(req, res){
	var id = req.params._id;
	var schedule = req.body;
	Schedule.updateSchedule(id, schedule, {}, function(err, schedule){
		if(err){
			throw err;
		}
		res.json(schedule);
	});
});

app.delete('/api/schedules/:_id', function(req, res){
	var id = req.params._id;
	Schedule.removeSchedule(id, function(err, schedule){
		if(err){
			throw err;
		}
		res.json(schedule);
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

app.get('/api/results', function(req, res){
	Result.getResults(function(err, results){
		if(err){
			throw err;
		}
		res.json(results);
	});
});

app.get('/api/results/:_id', function(req, res){
	Result.getResultById(req.params._id, function(err, result){
		if(err){
			throw err;
		}
		res.json(result);
	});
});

app.post('/api/results', function(req, res){
	var result = req.body;
	Result.addResult(result, function(err, result){
		if(err){
			throw err;
		}
		res.json(result);
	});
});

app.put('/api/results/:_id', function(req, res){
	var id = req.params._id;
	var result = req.body;
	Result.updateResult(id, result, {}, function(err, result){
		if(err){
			throw err;
		}
		res.json(result);
	});
});

app.delete('/api/results/:_id', function(req, res){
	var id = req.params._id;
	Result.removeResult(id, function(err, result){
		if(err){
			throw err;
		}
		res.json(result);
	});
});

app.get('/api/stats', function(req, res){
	Stat.getStats(function(err, stats){
		if(err){
			throw err;
		}
		res.json(stats);
	});
});

app.get('/api/stats/:_id', function(req, res){
	Stat.getStatById(req.params._id, function(err, stat){
		if(err){
			throw err;
		}
		res.json(stat);
	});
});

app.post('/api/stats', function(req, res){
	var stat = req.body;
	Stat.addStat(stat, function(err, stat){
		if(err){
			throw err;
		}
		res.json(stat);
	});
});

app.put('/api/stats/:_id', function(req, res){
	var id = req.params._id;
	var stat = req.body;
	Stat.updateStat(id, stat, {}, function(err, stat){
		if(err){
			throw err;
		}
		res.json(stat);
	});
});

app.delete('/api/stats/:_id', function(req, res){
	var id = req.params._id;
	Stat.removeStat(id, function(err, stat){
		if(err){
			throw err;
		}
		res.json(stat);
	});
});

//app.listen(3000);
//console.log('Running on port 3000...');

//For avoiding Heroku $PORT error
app.get('/', function(request, response) {
    var status = 'App is running'
    response.send(status);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});