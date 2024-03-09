import http from 'http';
import { Server } from 'socket.io';
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Client connected');

    // Example: Listen for a client event
    socket.on('clientHello', (data) => {
        console.log('Client says:', data);

        // Example: Emit an event to the client
        socket.emit('serverHello', 'Hello from the server!');
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
