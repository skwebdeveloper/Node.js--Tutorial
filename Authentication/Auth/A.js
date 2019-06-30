var http = require('http');
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/read.txt' , 'utf8');
myReadStream.on('data' , function(anything){
  console.log('new chunk received');
  console.log(anything);
});






// var http = require('http');
//
// var server = http.createServer(function(req, res){
//   console.log('request was made ' + req.url);
//   res.writeHead(200 , {'Content-Type': 'text/plain'});
//   res.end("Hey Saurabh");
// });
//
// server.listen(3000 , '127.0.0.1');
// console.log('Working');
