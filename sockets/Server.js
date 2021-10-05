const express = require('express');
const app = express();
const {Server} = require('socket.io')

const http = require('http');


const server = http.createServer(app);
app.use(express.static('public'))

server.listen(3000, ()=>{
    console.log('Escuchando en el puerto : 3000')
});
const io = new Server(server)
io.on('connection', (socket) => {
      console.log('nueva conexion id: ' + socket.id);

      socket.on('msj', (msj)=>{
        console.log(`ensaje ${msj.Mensaje}`)

         io.emit('msj', msj )
      })

})