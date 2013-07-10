var http = require('http')
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buffer = new Buffer(200000);

buffer.write(fs.readFileSync('index.html', 'utf-8'), 'utf-8');


app.get('/', function(request, response) {
    response.send(buffer.toString('utf-8', 0, 27));
    console.log(data);
});


fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
