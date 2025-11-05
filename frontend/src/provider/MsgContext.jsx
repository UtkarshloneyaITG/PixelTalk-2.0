import React, { createContext, useContext, useState, useEffect } from "react";
import { socket } from "../services/socket";

const MsgContext = createContext();

export const MsgContextProvider = ({ children }) => {
  const [image, setimage] = useState(null);
  const [send, setsend] = useState({ msg: "", userID: "2", image: null });
  const sendMessage = () => {
    if (send.msg.trim() !== "" || image != null) {
      socket.emit("chat-message", send);
      setimage(null);
      setsend({ msg: "", userID: "", image: null });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        if (send.msg.trim() !== "" || image != null) {
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
    <MsgContext.Provider
      value={{ send, setsend, sendMessage, image, setimage }}
    >
      {children}
    </MsgContext.Provider>
  );
};

export const useMsgFunctions = () => useContext(MsgContext);
