"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSocket = void 0;
const events_1 = __importDefault(require("./events"));
const initSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);
        // socket.on('')
        // Handle custom events
        (0, events_1.default)(socket, io);
        // socket.on("", () => {})
        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });
};
exports.initSocket = initSocket;
