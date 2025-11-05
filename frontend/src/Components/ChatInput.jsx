import { useRef, useState } from "react";
import { useMsgFunctions } from "../provider/msgContext";
import "../style/chatPage.css";
import logo_of_img from "../assets/svg/image-square-svgrepo-com.svg";
function ChatInput() {
  const fileinput = useRef();
  const { send, setsend, sendMessage, image, setimage } = useMsgFunctions();

  return (
    <>
      <div
        className=" msg-box text-white rounded-3xl flex  justify-center items-center image_icon"
        onClick={() => {
          fileinput.current.click();
        }}
      >
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt=""
            className="w-fit h-fit p-2 rounded-2xl ransition-transform duration-300 hover:scale-125"
          />
        ) : (
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
      <div className=" md:w-[80%] sm:w-[100%] self-center msg-box text-white rounded-3xl flex pl-5  justify-center items-center">
        <input
          type="text"
          placeholder="Message"
          className="msg-input"
          onInput={(e) => {
            setsend({ msg: e.target.value, userID: "Gamith", image: image });
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
                      attributeName="stopColor"
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
      <input
        type="file"
        ref={fileinput}
        className="h-0 w-0"
        onChange={(e) => {
          setimage(e.target.files[0]);
          setsend({ msg: "", userID: "Gamith", image: e.target.files[0] });
        }}
      />
    </>
  );
}

export default ChatInput;
