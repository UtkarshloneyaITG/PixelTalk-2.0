const {
  drawController,
  startController,
  clearController,
} = require("../controller/draw.controller");
const { messageController } = require("../controller/message.controller");
const MSG_ = require("../model/chat.model");

const handleSocketConnection = async (socket, io) => {
  console.log("A user connected:", socket.id);
  const chatData = await MSG_.find();
  chatData.forEach((msg) => {
    io.emit("chat-message", msg);
  });
  // drawData.forEach((item) => {
  //   io.emit(item.event, item.data);
  // });
  // socket.on("draw", (data) => {
  //   drawController(socket, io, data);
  // });
  // socket.on("start", (data) => {
  //   startController(socket, io, data);
  // });
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
