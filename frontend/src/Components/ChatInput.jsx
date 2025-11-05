import { useEffect, useState } from "react";
import { socket } from "../services/socket";
import "../style/chatPage.css";

function ChatInput() {
  const [send, setsend] = useState({ msg: "", userID: "" });
  const sendMessage = () => {
    socket.emit("chat-message", send);
    setsend({ msg: "", userID: "" });
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // cleanup on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [send]);
  return (
    <>
      <div className="flex items-center gap-3 px-4 py-3 border-t border-slate-700 Chat--chat-input">
        <input
          type="text"
          placeholder="Message"
          className="msg-input"
          onInput={(e) => {
            setsend({ msg: e.target.value, userID: 1 });
          }}
          value={send.msg}
        />
        <div className="msg-button -mb-2">
          <button
            className="send-btn -mb-5"
            onClick={() => {
              sendMessage(send);
            }}
          >
            <svg
              className="send-svg"
              width="80px"
              height="80px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="gradient-fill"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00BFFF">
                    <animate
                      attributeName="stop-color"
                      values="#00BFFF;#1E90FF;#00BFFF"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#1E90FF">
                    <animate
                      attributeName="stop-color"
                      values="#1E90FF;#00FFCC;#1E90FF"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>
              <path
                d="M6.99811 10.2467L7.43298 11.0077C7.70983 11.4922 7.84825 11.7344 7.84825 12C7.84825 12.2656 7.70983 12.5078 7.43299 12.9923L7.43298 12.9923L6.99811 13.7533C5.75981 15.9203 5.14066 17.0039 5.62348 17.5412C6.1063 18.0785 7.24961 17.5783 9.53623 16.5779L15.8119 13.8323C17.6074 13.0468 18.5051 12.654 18.5051 12C18.5051 11.346 17.6074 10.9532 15.8119 10.1677L9.53624 7.4221C7.24962 6.42171 6.1063 5.92151 5.62348 6.45883C5.14066 6.99615 5.75981 8.07966 6.99811 10.2467Z"
                fill="#919191"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatInput;
