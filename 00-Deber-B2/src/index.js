import express from 'express'
import {Server as WebSocketServer} from 'socket.io'
import http from 'http'
import {v4 as uuid} from 'uuid'

const notes = [];

const nombres = ['William', 'Francisco', 'Cris', 'Ariel', 'Miguel', 'Lizbeth', 'Anahi', 'Genesis', 'Betty', 'Rosa'];
//const nombre1 = nombres[Math.floor(Math.random() * nombres.length)];
//const nombre2 = nombres[Math.floor(Math.random() * nombres.length)];


const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

// Forma de usar express para evitar usar directorios
// por cada archivo
app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('New connection from:', socket.id);
    socket.emit('server:loadnotes', notes);

    socket.on('client:newnote', newNote =>{
        const note = {...newNote, id: uuid()};
        notes.push(note);
        socket.emit('server:newnote', note);
    });
});

server.listen(3000);
console.log('Server on port', 3000);