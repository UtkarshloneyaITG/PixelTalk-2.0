const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const handleSocketConnection = require("./socket/socket");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

app.use(cors({ origin: "*" }));
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("🟢 frontend connected:", socket.id);
  handleSocketConnection(socket, io);
  socket.on("disconnect", () => console.log("🔴 Disconnected:", socket.id));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
