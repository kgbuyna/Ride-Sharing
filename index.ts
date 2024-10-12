import 'module-alias/register'
import http from "http";
import { Server} from "socket.io";

import express, { Express, Request, Response } from "express";
import auth from "routes/auth";
import cors from "cors";
import {initSocket} from "./sockets/index";
import { assertDatabaseConnectionOk } from 'db';
const app : Express = express(); // Remove the type annotation

const server = http.createServer(app);

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
assertDatabaseConnectionOk()

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", auth);

server.listen(PORT, ()=> {
    console.log(`listening on port: ${PORT}`);
});
  