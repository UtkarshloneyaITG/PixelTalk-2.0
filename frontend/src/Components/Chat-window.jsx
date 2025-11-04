import SendTo from "./ChatSendTo";
import SendBy from "./ChatSendBy";
import ChatInput from "./ChatInput";
import { useEffect } from "react";
import { socket } from "../services/socket";
import { useState } from "react";

function ChatWindow() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleMessage = (msg) => {
      setMessages((prev) => {
        const newMessages = [...prev, msg];
        console.log(newMessages); // now it shows the updated array
        return newMessages;
      });
    };

    socket.on("chat-message", handleMessage);

    return () => {
      socket.off("chat-message", handleMessage);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col flex-1 Chat-bg">
        <div className="px-6 py-3 font-semibold Chat-Person--placeholder">
          Alen Santos
        </div>
        <div className="flex-1 p-6 overflow-y-auto space-y-4 Chat--Chat-placeholder">
          {messages.map((value) => {
            return value.userID == 1 ? (
              <SendBy
                text={value.msg}
                date={value.date}
                time={value.time}
                name={value.userID}
              />
            ) : (
              <SendTo text={value.msg} date={value.date} time={value.time} />
            );
          })}
        </div>
        {/* {Chat Input} */}
        <ChatInput />
      </div>
    </>
  );
}

export default ChatWindow;
