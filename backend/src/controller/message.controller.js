const fs = require("fs");
const path = require("path");
const messageOBJECT = require("../model/chat.model");

const chatJSON = path.join("C:/Users/Itgeeks/Desktop/ChatData/chat.json");
const messageController = async (socket, io, msg) => {
  try {
    let imageDataUrl = null;
    if (msg.image) {
      const mimeType = msg.imageType || "image/png"; // store type in msg.imageType
      imageDataUrl = `data:${mimeType};base64,${Buffer.from(msg.image).toString(
        "base64"
      )}`;
    }

    const MSG = new messageOBJECT(msg.msg, msg.userID, imageDataUrl);

    await io.emit("chat-message", MSG);

    let fileData = [];

    if (fs.existsSync(chatJSON)) {
      const jsonData = fs.readFileSync(chatJSON, "utf-8");
      fileData = JSON.parse(jsonData);
    }

    fileData.push(MSG);

    fs.writeFileSync(chatJSON, JSON.stringify(fileData, null, 2), "utf-8");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { messageController };
