var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = new Buffer(27);

fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
  buffer.write(data); 
});

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8', 0, 27));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
