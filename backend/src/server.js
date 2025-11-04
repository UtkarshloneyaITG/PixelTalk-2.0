const express = require("express");
const http = require("http");
const { Server } = require("socket.io");


const handleSocketConnection = require("./socket/socket");
const cors = require("cors");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // 👈 sab origins allow
    methods: ["GET", "POST"],
  },
});
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("public"));

io.on("connection", async (socket) => await handleSocketConnection(socket, io));

server.listen(3000, () => {
  console.log(`server running on http//localhost:${3000}`);
});
