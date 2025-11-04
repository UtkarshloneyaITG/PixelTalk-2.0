

const messageController = async (socket, io, msg, messages_) => {
  try {

    socket.broadcast.emit("chat-message", msg);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { messageController };
