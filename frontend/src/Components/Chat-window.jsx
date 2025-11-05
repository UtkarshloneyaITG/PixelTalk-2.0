import SendTo from "./ChatSendTo";
import SendBy from "./ChatSendBy";
import ChatInput from "./ChatInput";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { socket } from "../services/socket";
import { useMsgFunctions } from "../provider/msgContext";

function ChatWindow() {
  const { send, sendMessage } = useMsgFunctions();

  const [messages, setMessages] = useState([]);

  console.log(messages);

  const chatLogs = useRef(null);
  
  useEffect(() => {
    chatLogs.current?.lastElementChild?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    const handleMessage = (msg) => {
      setMessages((prev) => {
        let exists = JSON.stringify(prev) == JSON.stringify(msg);
        if (exists) return prev;
        return [...prev, msg];
      });
    };

    console.log;

    socket.on("chat-message", handleMessage);
    return () => socket.off("chat-message", handleMessage);
  }, [send, sendMessage, messages , setMessages]);

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
