/*jshint node:true*/
var express = require('express');
// var path = require("path");
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var routes;

app.set('port', process.env.PORT || 3500);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var server = app.listen(app.get('port'), function () {
	console.log('Server up: http://localhost:' + app.get('port'));
});

routes = require('./routes/index')(app);

