// Creating a Read and Write stream And try to Use Pipe !
// -----------------------------------------------------------------------------
// 1 . First Method Use of Pipe

// var http = require('http');
// var fs = require('fs');
// var myReadStream = fs.createReadStream(__dirname + '/read.txt' , 'utf8');
// var myCreateStream = fs.createWriteStream(__dirname + 'new.txt');
// myReadStream.pipe(myCreateStream);

// 2 . Second Method

// myReadStream.on('data' , function(anything){
//   console.log('new chunk received');
//   myCreateStream.write(anything);
// });

// -----------------------------------------------------------------------------



// 3 . Creating a Serve
//
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req, res){
//   console.log('request was made ' + req.url);
//   res.writeHead(200 , {'Content-Type': 'text/html'});  // Different files different extensiosn - text/plain , text/html , text/css
// // res.end('Anymessage');    //------In place of this we irectly uses PIPE() soo we can write directly on it
//   var myReadStream = fs.createReadStream(__dirname + '/index.html' , 'utf8'); // As changing Content-Type change here also
//   myReadStream.pipe(res);
// });
//
// server.listen(3000 , '127.0.0.1');
// console.log('Working');

// -----------------------------------------------------------------------------

// 4 . Serving a JSON Object

// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req, res){
//   res.writeHead(200 , {'Content-Type': 'application/JSON'});
//   var myObject = {
//     name: 'Saurabh',
//     age: 12,
//     job: 'Yes appplied'
//   }
//    res.end(JSON.stringify(myObject));
// });
// server.listen(3000 , '127.0.0.1');
// console.log('Yes server is  listening');

// -----------------------------------------------------------------------------
// 5 . Basic about how routing works

// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req, res){
//  console.log('This page is going on here : ' + req.url);
//  if(req.url === '/home' || req.url === '/'){
//    res.writeHead(200 , {'Content-Type': 'text/html'});
//    fs.createReadStream(__dirname + '/index.html').pipe(res);
//
//  }
//  else if(req.url === '/contact') {
//    res.writeHead(200 , {'Content-Type': 'text/html'});
//   fs.createReadStream(__dirname + '/contact.html').pipe(res);
//  };
// });
// server.listen(3000 , '127.0.0.1');
// console.log('Yes server is  listening');

//------------------------------------------------------------------------------

// 6 . Introduction to express

var express = require('express');
var app = express();

app.set('view engine' , 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact' , function(req, res){
  res.sendFile(__dirname + '/contact.html');
});

// How to get the ID of something
// You have to use (:id) and (req.params.id)
app.get('/profile/:name', function(req , res){
  res.render('profile' , {person: req.params.name});
});
app.get('/admin/:id', function(req, res){
  res.render('admin', {pid: req.params.id})
});

app.listen(3000);
