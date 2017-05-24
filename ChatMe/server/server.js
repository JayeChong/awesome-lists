var express = require('express');
var serverApp = express();
var server = require('http').Server(serverApp);
var path = require("path");

var io = require('socket.io')(server,{

});

serverApp.use(express.static(__dirname.slice(0,-6) + '/build'));

serverApp.get('/', function (req, res) {
    // res.send("hello");
    console.log(path.join(__dirname.slice(0,-6),"build")+'/index.html');
    res.sendFile(path.join(__dirname.slice(0,-6),"build")+'/index.html');
});

server.listen(3000,function(){
    console.log("🌏 server is listening on port 3000 ");
});


