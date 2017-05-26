var express = require('express');
var app = express();
var server = require('http').Server(app);

var webpack = require('webpack');
var config = require('../webpack.config.js');
var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));



var io = require('socket.io')(server,{
    /**
     * 还可以带可选参数
     * path: (String) 代表捕获哪个路径下的事件。
     */
});
var path = require('path');

var staticPath = path.resolve(__dirname , ".." , "build");

// app.use(express.static(path.resolve(__dirname , "..")));
app.use(express.static(path.resolve(__dirname , ".." , "build")));
app.use('/chatroom',express.static(path.resolve(__dirname , "..", "client")));

app.get('/', function (req, res) {
  res.sendFile(staticPath + '/index.html');
});

io.on('connection', function(socket){
  console.log(`有一个新用户${socket.id}登录了`);

  socket.on("message",function(obj){
    console.log(obj.message);
  });
  
  socket.on('disconnect', function(){
    console.log(`用户${socket.id}退出了登录`);
  });
});



server.listen(3000, function(){
  console.log('listening on *:3000');
});