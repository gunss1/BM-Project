var http = require('http');

var port = 8080;
http.createServer(function (req, res) {
	console.log("Tea Testnet: "+port);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('ACC Lah Pantek!');
}).listen(port);