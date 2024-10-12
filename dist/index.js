"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("routes/auth"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("db");
const app = (0, express_1.default)(); // Remove the type annotation
const server = http_1.default.createServer(app);
const PORT = 3000;
// const io = new Server(server, {
//     cors: {
//         origin: "*"
//     },
// });   
// initSocket(io);
// io.on('connection', (socket) => {
//     // socket.on('')
// })
(0, db_1.assertDatabaseConnectionOk)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/auth", auth_1.default);
server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
