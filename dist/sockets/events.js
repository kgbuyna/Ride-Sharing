"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleEvents = (socket, io) => {
    // Custom event handler for 'message' event
    // socket.on('message', (data) => {
    //   console.log('Message received:', data);
    //   // Emit the message to all clients
    // //   io.emit('message', data);
    //     // io.emit('')
    // });
    socket.on('hello', () => {
        socket.emit("basicEmit", 1, "hello", Buffer.from("world"));
    });
    // socket.on("noArg", () => {
    //     // ...
    //   });
    //   socket.on("basicEmit", (a, b, c) => {
    //     // a is inferred as number, b as string and c as buffer
    //   });
    //   socket.on("withAck", (d, callback) => {
    //     // d is inferred as string and callback as a function that takes a number as argument
    //   });
    // Other custom events can be handled similarly
    // socket.on('joinRoom', (room) => {
    //   socket.join(room);
    //   console.log(`Client joined room: ${room}`);
    // });
    // // Example: Broadcast an event to other clients
    // socket.on('typing', (room) => {
    //   socket.to(room).emit('typing', socket.id);
    // });
};
exports.default = handleEvents;
