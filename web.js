var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buffer = new Buffer(200000);

buffer.write(fs.readFileSync('index.html', 'utf-8'), 'utf-8');

app.get('/', function(request, response) {
    response.send(buffer.toString('utf-8', 0, 27));
    console.log(data);
});

# app.register('.html', require('jade'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
