var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buffer = new Buffer(270);

app.get('/', function(request, response) {

    fs.readFileSync('index.html', 'utf-8', function (err, data) {
	if (err) throw err;
	console.log(data);
	buffer.write(data);
    });


    response.send(buffer.toString('utf-8', 0, 270));
    console.log(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
