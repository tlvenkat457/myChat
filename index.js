var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = io.listen(server);


app.get('/',function(req,res){

	res.sendFile(__dirname+'/index.html');
})

io.on('connection',function(socket){

	console.log('user connected');

	socket.on('disconnect', function(){
	 io.emit('chat message','user disconnected');
     console.log('user disconnected. Let me find who in some time');
  });

	socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

})


 server.listen(7777);