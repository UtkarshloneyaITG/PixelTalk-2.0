import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-frontend";

const socket = io("http://192.168.10.69:3000");

const colorPlatesInitial = ["red", "blue", "green", "yellow", "black"];

const Canvas = () => {
  const [drawing, setDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState("black");
  const [colorPlates, setColorPlates] = useState(colorPlatesInitial);
  const [message, setMessage] = useState("");
  const canvasRef = useRef(null);
  const msgAreaRef = useRef(null);

  const ctx = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext("2d");
    }

    socket.on("draw", (pos) => {
      ctx.current.lineTo(pos.x, pos.y);
      ctx.current.strokeStyle = pos.color;
      ctx.current.stroke();
    });

    socket.on("start", (pos) => {
      ctx.current.beginPath();
      ctx.current.moveTo(pos.x, pos.y);
    });

    socket.on("cleared", () => {
      ctx.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    });

    socket.on("chat-message", (msg) => {
      const msgBox = document.createElement("div");
      msgBox.innerHTML = `
        <div className="msg-div self sender">
          <div className="user-msg">${msg}</div>
        </div>
      `;
      msgAreaRef.current.appendChild(msgBox);
    });
  }, []);

  const handleCanvasMouseDown = (e) => {
    setDrawing(true);
    ctx.current.beginPath();
    ctx.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    socket.emit("start", {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };

  const handleCanvasMouseUp = () => setDrawing(false);
  const handleCanvasMouseLeave = () => setDrawing(false);

  const handleCanvasMouseMove = (e) => {
    if (!drawing) return;

    const pos = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      color: brushColor,
    };
    ctx.current.lineTo(pos.x, pos.y);
    ctx.current.strokeStyle = brushColor;
    ctx.current.stroke();

    socket.emit("draw", pos);
  };

  const clearBoard = () => {
    socket.emit("clear");
    ctx.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  const addColor = () => {
    const color = document.querySelector(".color-picker-user").value;
    setColorPlates((prevPlates) => [...prevPlates, color]);
  };

  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    const msgBox = document.createElement("div");
    msgBox.innerHTML = `
      <div className="msg-div self">
        <div className="user-msg">${message}</div>
      </div>
    `;
    msgAreaRef.current.appendChild(msgBox);
    socket.emit("chat-message", message);
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") handleSendMessage();
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-4 bg-gray-100">
      <section className="w-full flex justify-center space-x-4 mb-4">
        <button
          onClick={clearBoard}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          Clear
        </button>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2" id="color-picker">
            {colorPlates.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className={`w-8 h-8 border-2 border-white rounded-md ${
                  brushColor === color ? "border-black" : ""
                }`}
                onClick={() => setBrushColor(color)}
              />
            ))}
          </div>
          <div>
            <button
              onClick={addColor}
              className="px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              +
            </button>
            <input
              type="color"
              className="mt-1 w-10 h-10 border-none cursor-pointer"
            />
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="Chats-section">
          <canvas
            ref={canvasRef}
            width="638"
            height="600"
            className="border border-black absolute top-0 right-0 z-10 mt-5"
            onMouseDown={handleCanvasMouseDown}
            onMouseUp={handleCanvasMouseUp}
            onMouseLeave={handleCanvasMouseLeave}
            onMouseMove={handleCanvasMouseMove}
          />
          <div
            id="msg-area"
            ref={msgAreaRef}
            className="overflow-y-scroll max-h-[200px] mb-4 p-2 bg-[#292929] border rounded-md"
          ></div>
          <div className="message-box flex items-center space-x-2 mt-4">
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
              onKeyDown={handleKeyPress}
              className="w-full px-4 py-2 border  border-gray-300 rounded-md"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Canvas;
