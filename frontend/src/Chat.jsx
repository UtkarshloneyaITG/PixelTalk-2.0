import { useEffect } from "react";
import ChatAppBody from "./Components/ChatAppBody";
import ChatAppHeader from "./Components/ChatAppHeader";

function ChatApp() {
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);
  return (
    <>
      <div className="bg-slate-900 text-white flex flex-col h-screen font-[Poppins]">
        {/* <ChatAppHeader /> */}
        <ChatAppBody />
      </div>
    </>
  );
}

export default ChatApp;
