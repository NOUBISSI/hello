var http = require('http');
var app = require('express')();

app.get('/', function (req, res) {
   res.send('Hello World!');
});

http.createServer(app).listen(3000, function () {
   console.log('Started!');
});
