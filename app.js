var http = require('http');
var app = require('express')();

app.get('/', function (req, res) {
   res.send('first ... ');
});

http.createServer(app).listen(3000, function () {
   console.log('Started!');
});
