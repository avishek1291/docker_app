const express  =  require('express');
const http  = require('https');
const app =  express();
const bodyParser =  require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server =  require('http').createServer(app);

const io =  require('socket.io')(server);
io.on('connection', (client)=> {
    client.on('new-message', (message)=> {
        console.log('caller joined the chat', message)
        io.emit('new-message',message);

    });
 console.log('device connected');
})
app.get('/', (req, res)=> {
    res.send('ok from new 4');
})
app.post('/location', (req, res)=> {
    console.log('req.body', req.body);
    io.emit('new-message',req.body);
    res.send('ok');
})

app.post('/test', (req, res ) => {
  const options  =  {
    hostname: 'hostname',
    port: port,
    path: urlpath,
    method: 'method type'
  };
  http.request(options, (err, res ) => {

  })
})
server.listen(9000, ()=> {
    console.log('server running at http://localhost:9000')
});