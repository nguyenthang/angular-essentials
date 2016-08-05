var express = require('express'),
	app = express(),
	config = require('./server/config/configure'),
	dbUrl = require('./server/config/db'),
	mongoose = require('mongoose');


app.use(express.static(__dirname + '/client/'));

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});

app = config(app);

mongoose.connect(dbUrl.url);

mongoose.connection.on('error', function(){
	console.log('something went wrong');
});

mongoose.connection.on('open', function(){
	console.log('connected to db');
});

var server = app.listen(app.get('port'), function(){
	console.log('The server is running on port ' + server.address().port);
});