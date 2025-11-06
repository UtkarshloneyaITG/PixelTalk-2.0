const fs = require("fs");
const path = require("path");
const { Socket } = require("socket.io");

const DRAW = path.join("C:/Users/Itgeeks/Desktop/ChatData/draw.json");
const drawController = async (socket, io, data) => {
  try {
    await socket.broadcast.emit("draw", data);
    let fileData = [];

    if (fs.existsSync(DRAW)) {
      const jsonData = fs.readFileSync(DRAW, "utf-8");
      fileData = JSON.parse(jsonData);
    }

    fileData.push({ event: "draw", data });

    fs.writeFileSync(DRAW, JSON.stringify(fileData, null, 2), "utf-8");
  } catch (error) {
    console.log(error);
  }
};

const startController = async (socket, io, data) => {
  try {
    await socket.broadcast.emit("start", data);
    let fileData = [];

    if (fs.existsSync(DRAW)) {
      const jsonData = fs.readFileSync(DRAW, "utf-8");
      fileData = JSON.parse(jsonData);
    }

    fileData.push({ event: "start", data });

    fs.writeFileSync(DRAW, JSON.stringify(fileData, null, 2), "utf-8");
  } catch (error) {
    console.log(error);
  }
};

const clearController = async (socket, io) => {
  try {
    await socket.broadcast.emit("clear", true);
    fs.writeFileSync(DRAW, JSON.stringify([], null, 2), "utf-8");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { drawController, startController, clearController };
