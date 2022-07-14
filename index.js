import express from "express";
const app = express();
import http from 'http';
const server = http.createServer(app);
import  {  Server }  from "socket.io";
const io = new Server(server);

import mongoose from "mongoose";
import userRouter from "./users-routers/router.js";
import studentRouter from "./users-routers/students-router.js";

const port = process.env.PORT || 8000;
const json = express.json();
app.use(json);

// (async () => {
//     await mongoose.connect('mongodb://localhost:27017/myProject');
// })();

const staticFiles = express.static('./frontend');
app.use(staticFiles);

// app.use( userRouter );
// app.use( studentRouter );

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
      socket.on('20micro', ( inputValue ) => {
       io.emit( '20microBackend', inputValue );
      });
  });


 server.listen(port, ()=>console.log(`Server is listening port ${port}`));