const {
  drawController,
  startController,
  clearController,
} = require("../controller/draw.controller");
const { messageController } = require("../controller/message.controller");


const handleSocketConnection = async (socket, io) => {
  console.log("A user connected:", socket.id);

  socket.on("draw", (data) => {
    drawController(socket, io, data);
  });
  socket.on("start", (data) => {
    startController(socket, io, data);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
  socket.on("clear", () => {
    clearController(socket, io);
  });

  socket.on("chat-message", (msg) => {
    messageController(socket, io, msg);
  });
};

module.exports = handleSocketConnection;
