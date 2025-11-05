import React, { createContext, useContext, useState, useEffect } from "react";
import { socket } from "../services/socket";

const MsgContext = createContext();

export const MsgContextProvider = ({ children }) => {
  const [send, setsend] = useState({ msg: "", userID: "2" });
  const sendMessage = () => {
    socket.emit("chat-message", send);
    setsend({ msg: "", userID: "" });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        if (send.msg.trim() !== "") {
          sendMessage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // cleanup on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [send]);

  return (
    <MsgContext.Provider value={{ send, setsend, sendMessage }}>
      {children}
    </MsgContext.Provider>
  );
};

export const useMsgFunctions = () => useContext(MsgContext);
