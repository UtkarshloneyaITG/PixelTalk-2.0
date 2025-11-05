import SendTo from "./ChatSendTo";
import SendBy from "./ChatSendBy";
import ChatInput from "./ChatInput";
import { useState } from "react";
import { useEffect } from "react";
import { socket } from "../services/socket";

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
    // let MYID =
    //     useEffect(()=>{
    //       const myuserid = JSON.parse(localStorage.getItem("userid"))

    //     },[])
    socket.on("chat-message", handleMessage);

    return () => {
      socket.off("chat-message", handleMessage);
    };
  }, []);
  return (
    <>
      <div className=" relative flex flex-col flex-1 px-10 pb-5 chat-window justify-end ">
        <div className="chat-wrapper w-full">
          <div className="flex items-center justify-between px-5">
            <div className="profile flex items-center">
              <div className="profile-image">
              </div>
              <div className="px-3 py-8  Chat-Person--placeholder text-2xl">
                User
              </div>
            </div>
              <div className="extra flex">
                ●●●
              </div>
          </div>
          <div className="p-6 overflow-auto space-y-4 Chat--Chat-placeholder h-screen fade-messages">
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
                <SendTo text={value.msg} date={value.date} time={value.time} />
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
