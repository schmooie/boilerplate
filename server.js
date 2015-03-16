var express = require('express');
var server = express();
var itemJSON = require('./item.json');

var port = process.env.PORT || 3333;

server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
server.use(express.static(__dirname + '/public'));

// api
server.get('/item', function(req, res) {
  console.log('request for item')
  res.json(itemJSON);
});
server.get('/', function(req, res) {
  res.render('index.html');
});

server.listen(port, function() {
  console.log('Listening on port %d', port);
});