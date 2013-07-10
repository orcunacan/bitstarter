var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buffer = new Buffer(200000);
var http = require('http');

buffer.write(fs.readFileSync('index.html', 'utf-8'), 'utf-8');

http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(buffer.toString('utf-8'));  
    response.end();  
}).listen(8000);

app.get('/', function(request, response) {
    response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
