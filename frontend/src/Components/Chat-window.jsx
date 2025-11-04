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
    const disp = document.getElementsByClassName("Chat--Chat-placeholder")[0];
    console.log(disp);
    disp.scrollTop = disp.scrollHeight;
    console.log(disp.screenTop);
    return () => {
      socket.off("chat-message", handleMessage);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col flex-1 px-10 pb-5 chat-window">
        <div className="px-6 py-3 font-semibold Chat-Person--placeholder">
          Alen Santos
        </div>
        <div
          className="p-6 overflow-auto space-y-4 Chat--Chat-placeholder "
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
        {/* {Chat Input} */}
        <ChatInput />
      </div>
    </>
  );
}

export default ChatWindow;
