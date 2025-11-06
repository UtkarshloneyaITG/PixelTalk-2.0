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
        className=" msg-box text-white rounded-3xl flex  justify-center items-center image_icon cursor-pointer"
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
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z"
              stroke="white"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
      <div className=" md:w-[80%] sm:w-[100%] self-center msg-box text-white rounded-3xl flex pl-5  justify-center items-center z-10">
        <input
          type="text"
          placeholder="Message"
          className="msg-input"
          onInput={(e) => {
            setsend({ msg: e.target.value, userID: "Gamith", image: image });
          }}
          value={send.msg}
        />
        <div className="msg-button -mb-2 flex items-center">
          <div className="relative inline-block group">
            <button className="cnavas-btn cursor-pointer pb-2">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A90E2" stopOpacity="1" />
                    <stop offset="100%" stopColor="#9013FE" stopOpacity="1" />
                  </linearGradient>
                </defs>

                <path
                  d="M19.4998 7.49891L18.0098 8.98891L15.0098 5.98891L16.4998 4.49891C16.9198 4.07891 17.4598 3.87891 17.9998 3.87891C18.5398 3.87891 19.0798 4.07891 19.4998 4.49891C20.3298 5.32891 20.3298 6.66891 19.4998 7.49891Z"
                  fill="url(#grad)"
                />
                <path
                  d="M17.3095 9.69922L6.49945 20.4992C5.66945 21.3292 4.32945 21.3292 3.49945 20.4992C2.66945 19.6692 2.66945 18.3292 3.49945 17.4992L14.3095 6.69922L17.3095 9.69922Z"
                  fill="url(#grad)"
                />
                <path
                  d="M9.95051 3.50051L10.3605 2.11051C10.4005 1.98051 10.3605 1.84051 10.2705 1.74051C10.1805 1.64051 10.0205 1.60051 9.89051 1.64051L8.50051 2.05051L7.11051 1.64051C6.98051 1.60051 6.84051 1.64051 6.74051 1.73051C6.64051 1.83051 6.61051 1.97051 6.65051 2.10051L7.05051 3.50051L6.64051 4.89051C6.60051 5.0205 6.64051 5.16051 6.73051 5.26051C6.83051 5.36051 6.97051 5.39051 7.10051 5.35051L8.50051 4.95051L9.89051 5.36051C9.93051 5.37051 9.96051 5.38051 10.0005 5.38051C10.1005 5.38051 10.1905 5.34051 10.2705 5.27051C10.3705 5.17051 10.4005 5.03051 10.3605 4.90051L9.95051 3.50051Z"
                  fill="url(#grad)"
                />
                <path
                  d="M5.95051 9.50051L6.36051 8.1105C6.40051 7.9805 6.36051 7.84051 6.27051 7.74051C6.17051 7.64051 6.03051 7.61051 5.90051 7.65051L4.50051 8.05051L3.1105 7.64051C2.9805 7.60051 2.84051 7.64051 2.74051 7.73051C2.64051 7.83051 2.61051 7.97051 2.65051 8.10051L3.05051 9.50051L2.64051 10.8905C2.60051 11.0205 2.64051 11.1605 2.73051 11.2605C2.83051 11.3605 2.9705 11.3905 3.1005 11.3505L4.4905 10.9405L5.88051 11.3505C5.91051 11.3605 5.95051 11.3605 5.9905 11.3605C6.0905 11.3605 6.18051 11.3205 6.26051 11.2505C6.36051 11.1505 6.39051 11.0105 6.35051 10.8805L5.95051 9.50051Z"
                  fill="url(#grad)"
                />
                <path
                  d="M20.9497 14.5L21.3597 13.11C21.3997 12.98 21.3597 12.84 21.2697 12.74C21.1697 12.64 21.0297 12.61 20.8997 12.65L19.5097 13.06L18.1197 12.65C17.9897 12.61 17.8497 12.65 17.7497 12.74C17.6497 12.84 17.6197 12.98 17.6597 13.11L18.0697 14.5L17.6597 15.89C17.6197 16.02 17.6597 16.16 17.7497 16.26C17.8497 16.36 17.9897 16.39 18.1197 16.35L19.5097 15.94L20.8997 16.35C20.9297 16.36 20.9697 16.36 21.0097 16.36C21.1097 16.36 21.1997 16.32 21.2797 16.25C21.3797 16.15 21.4097 16.01 21.3697 15.88L20.9497 14.5Z"
                  fill="url(#grad)"
                />
              </svg>
            </button>

            {/* Tooltip */}
            <span
              className=" tooltip absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                   px-2 py-1 text-sm text-white bg-zinc-900 rounded opacity-0
                   group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            >
              Canvas
            </span>
          </div>

          <button
            className="send-btn -mb-5"
            onClick={() => {
              sendMessage(send);
            }}
          >
            <svg
              className="send-svg -mt-6.5"
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
