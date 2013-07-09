var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buffer = new Buffer(270);

fs.readFileSync('index.html', 'utf-8', function (err, data) {
  if (err) throw err;
  console.log(data);
  buffer.write(data);  
});

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8', 0, 270));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
