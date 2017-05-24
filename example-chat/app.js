var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server,{
    /**
     * 还可以带可选参数
     * path: (String) 代表捕获哪个路径下的事件。
     */
});



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected --- from server side');
  io.clients(function(error, clients){
      if (error) throw error;
      console.log(clients); 
    }
  );
  socket.on('disconnect', function(){
    console.log('user disconnected --- from server side');
  });
});

io.on('connection', function(socket){
    socket.on('ferret', function (name, fn) {
        console.log("param from client is "+name);
        fn('woot');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});


server.listen(3000, function(){
  console.log('listening on *:3000');
});