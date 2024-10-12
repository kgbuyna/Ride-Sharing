import  { Server } from 'socket.io';
import handleEvents from './events';
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from 'types/socket';

export const initSocket = (io: Server<ClientToServerEvents,ServerToClientEvents,InterServerEvents,SocketData>) => {
    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);
        // socket.on('')
        // Handle custom events
        handleEvents(socket, io);

        // socket.on("", () => {})
        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });
};
 
