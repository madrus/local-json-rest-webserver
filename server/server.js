var express = require('express');
var app = express();
var path    = require("path");

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/../app/index.html'), {});
})
.listen(7777);

console.log("Node Express server running at Port 7777");
