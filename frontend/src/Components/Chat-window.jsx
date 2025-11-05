import SendTo from "./ChatSendTo";
import SendBy from "./ChatSendBy";
import ChatInput from "./ChatInput";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { socket } from "../services/socket";

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const chatLogs = useRef(null);
  useEffect(() => {
    //3️⃣ bring the last item into view
    chatLogs.current?.lastElementChild?.scrollIntoView();
  }, [messages]);
useEffect(() => {
  const handleMessage = (msg) => {
    // Ignore messages already in list (simple duplicate prevention)
    setMessages((prev) => {
      const exists = prev.some(
        (m) => m.msg === msg.msg && m.time === msg.time && m.userID === msg.userID
      );
      if (exists) return prev;
      return [...prev, msg];
    });
  };

  socket.on("chat-message", handleMessage);
  return () => socket.off("chat-message", handleMessage);
}, []);

  return (
    <>
      <div className=" relative flex flex-col flex-1 px-10 pb-5 chat-window justify-end ">
        <div className="h-full">
          <div className="flex items-center justify-between pr-7">
            <div className="profile flex items-center">
              <div className="profile-image"></div>
              <div className="px-3 py-8  Chat-Person--placeholder text-2xl">
                User
              </div>
            </div>
            <div className="extra flex">●●●</div>
          </div>
          <div
            className="p-6 overflow-auto space-y-4 Chat--Chat-placeholder h-screen fade-messages"
            ref={chatLogs}
          >
            {messages.map((value, index) => {
              return value.userID == 1 ? (
                <SendBy
                  text={value.msg}
                  date={value.date}
                  time={value.time}
                  name={value.userID}
                  key={index}
                />
              ) : (
                <SendTo
                  text={value.msg}
                  date={value.date}
                  time={value.time}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        {/* {Chat Input} */}
        <ChatInput />
      </div>
    </>
  );
}

export default ChatWindow;
