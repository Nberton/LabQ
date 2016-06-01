//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');
var mongoose = require('mongoose');
var app = express();

//mongoose start
mongoose.connect('mongodb://localhost/data');

//mongoose schema definitions
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var Lab = new Schema({
  id : ObjectId,
  owner : String,
  pw : String,
  urlarg : String,
  numq : Number,
  qNames : Object
});

var Student = new Schema({
  pos : Number,
  name : String,
  details: String 
})

//convince that html is ok
app.configure(function() {
    app.use(express.static(__dirname + '/client'));         // set the static files location
    app.use(express.logger('dev'));                         // log every request to the console
    app.use(express.bodyParser());                          // pull information from html in POST
    app.use(express.methodOverride());                      // simulate DELETE and PUT
    // app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
});

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//express paths 
app.set('client', path.join(__dirname, 'client'));

//express routing
app.get('/student/:id', function(req , res){
  console.log("In student routing")
  res.sendfile('./client/studentview.html');
});

app.get('/TA/:id', function(req , res){
  console.log("In TA routing")
  res.sendfile('./client/TAview.html');
});

app.get('/Lab', function(req , res){
  console.log("In labMaker routing")
  res.sendfile('./client/labMaker.html');
});

app.post('/MakeLab', function(req, res) {
    console.log("Making Lab");
    var name = req.body.name,
        color = req.body.color;
});


//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
 var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));
var messages = [];
var sockets = [];

io.on('connection', function (socket) {
    messages.forEach(function (data) {
      socket.emit('message', data);
    });

    sockets.push(socket);

    socket.on('disconnect', function () {
      sockets.splice(sockets.indexOf(socket), 1);
      updateRoster();
    });

    socket.on('message', function (msg) {
      var text = String(msg || '');

      if (!text)
        return;

      socket.get('name', function (err, name) {
        var data = {
          name: name,
          text: text
        };

        broadcast('message', data);
        messages.push(data);
      });
    });

    socket.on('identify', function (name) {
      socket.set('name', String(name || 'Anonymous'), function (err) {
        updateRoster();
      });
    });
  });

function updateRoster() {
  async.map(
    sockets,
    function (socket, callback) {
      socket.get('name', callback);
    },
    function (err, names) {
      broadcast('roster', names);
    }
  );
}

function broadcast(event, data) {
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}
app.get('/', function (req, res) {
  res.send('Hello World')
})
// server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
//   var addr = server.address();
//   console.log("Chat server listening at", addr.address + ":" + addr.port);
// });

app.listen(process.env.PORT);
console.log(process.env.PORT)
console.log("App listening");
