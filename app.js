var express = require('express'),
    http = require('http');

var app = express();
var port = process.env.PORT || 6969;

app.all("*", function(request, response, next){
	response.writeHead(200, {"Content-Type": "text/plain"});
	next();
});

app.get("/", function(req, res){
	res.end("Hello World");
});

http.createServer(app).listen(port, function(){
	console.log("Express server listening on port " + port);
});
