import React, { useEffect, useRef, useState } from "react";
import { socket } from "../services/socket";
import "../style/drawing.css";
function ChatCanvas() {
  const [iscolor, setIsColor] = useState("black");
  const refresh = 1;
  const canvasRef = useRef(null);
  const colorPlate = useRef(null);
  const ctxRef = useRef(null);
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    socket.emit("clear", true);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const PRIMERY_COLOR = ["black", "red", "blue", "green", "yellow", "white"];
  const SECONDARY_COLOR = ["red", "blue", "green"];
  const colorRef = useRef(iscolor);
  const [isSec, setIsSec] = useState(SECONDARY_COLOR);
  useEffect(() => {
    colorRef.current = iscolor;
  }, [iscolor]);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth - 420;
      canvas.height = window.innerHeight;
    });
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth - 420;
    canvas.height = window.innerHeight;
    ctxRef.current = ctx;

    let drawing = false;

    // Mouse event handlers

    const handleMouseDown = (e) => {
      drawing = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
      socket.emit("start", { x: e.offsetX, y: e.offsetY });
    };

    const handleMouseUp = () => (drawing = false);
    const handleMouseLeave = () => (drawing = false);

    const handleMouseMove = (e) => {
      if (!drawing) return;

      const pos = { x: e.offsetX, y: e.offsetY, color: colorRef.current };

      ctx.lineTo(pos.x, pos.y);
      ctx.strokeStyle = pos.color;
      ctx.stroke();

      socket.emit("draw", pos);
    };

    // Attach mouse events
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("mousemove", handleMouseMove);

    // Socket listeners for other users
    const handleSocketDraw = (pos) => {
      ctx.lineTo(pos.x, pos.y);
      ctx.strokeStyle = pos.color;
      ctx.stroke();
    };

    const handleSocketStart = (pos) => {
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    };

    socket.on("draw", handleSocketDraw);
    socket.on("start", handleSocketStart);
    socket.on("clear", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Cleanup on unmount
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("mousemove", handleMouseMove);

      socket.off("draw", handleSocketDraw);
      socket.off("start", handleSocketStart);
    };
  }, [refresh]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ border: "2px solid black" }}
        className="fixed left-[28%] z-[2]"
      ></canvas>
      <div className="color-plate">
        <div className="Primery-colors flex gap-2 bg-[#fff5] rounded-2xl backdrop-blur-md rounded-xl p-4 m-2">
          {PRIMERY_COLOR.map((color) => {
            return (
              <div
                style={{
                  backgroundColor: color,
                  width: "25px",
                  height: "25px",
                  borderRadius: "100px",
                  border: `${color == iscolor ? "2px solid white" : ""}`,
                }}
                onClick={(e) => {
                  // e.target.style.border = "2px solid black";

                  setIsColor(e.target.style.backgroundColor);
                }}
              ></div>
            );
          })}
        </div>
        <div className="secondaryColor grid grid-cols-5 gap-2 max-h-60 bg-[#0005] rounded-2xl backdrop-blur-md rounded-xl p-4 m-2 ">
          {isSec.map((color) => {
            return (
              <div
                style={{
                  backgroundColor: color,
                  width: "25px",
                  height: "25px",
                  borderRadius: "100px",
                  border: `${color == iscolor ? "2px solid white" : ""}`,
                }}
                onChange={(e) => {
                  // e.target.style.border = "2px solid black";

                  setIsColor(e.target.style.backgroundColor);
                }}
              ></div>
            );
          })}
          <div
            className="AddColor text-center w-[25px] h-[25px] rounded-4xl bg-[#0005] flex items-center justify-center"
            onClick={(e) => {
              colorPlate.current.click();
            }}
          >
            <span>
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
          <input
            type="color"
            ref={colorPlate}
            onChange={(e) => {
              const newColor = e.target.value;

              // set drawing color immediately
              setIsColor(newColor);

              // add only once per picker open
              if (isPickingRef.current && !addedThisPickRef.current) {
                if (!isSec.includes(newColor) && isSec.length < 29) {
                  setIsSec((prev) => [...prev, newColor]);
                }
                addedThisPickRef.current = true;
              }
            }}
            onBlur={() => {
              isPickingRef.current = false;
              addedThisPickRef.current = false;
            }}
            className="w-0 h-0 opacity-0 absolute"
          />
        </div>
        <button
          onClick={() => {
            clearCanvas();
          }}
          className="Canvas-button w-full bg-[#0005] rounded-2xl backdrop-blur-md rounded-xl p-2 m-2"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default ChatCanvas;
