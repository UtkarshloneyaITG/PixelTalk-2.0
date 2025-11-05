import React, { createContext, useContext, useState, useEffect } from "react";
import { socket } from "../services/socket";
import theme2 from "../assets/theme/theme2.jpg";
import theme3 from "../assets/theme/theme3.jpg";
import theme4 from "../assets/theme/theme4.jpg";
import theme5 from "../assets/theme/theme5.jpg";
import theme6 from "../assets/theme/theme6.jpg";
import theme7 from "../assets/theme/theme7.jpg";
import theme8 from "../assets/theme/theme8.jpg";
import theme9 from "../assets/theme/theme9.jpg";

const MsgContext = createContext();

export const MsgContextProvider = ({ children }) => {
  const [image, setimage] = useState(null);
  const [send, setsend] = useState({ msg: "", userID: "2", image: null });
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem("theme") || null);
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


  const themes = [


  theme2,theme3 , theme4 , theme5 , theme5 , theme7 , theme8 , theme9

  ];

  useEffect(()=> {
      const savedTheme = localStorage.getItem("theme") || null;
      setSelectedTheme(savedTheme);
      console.log("hello them")
  } , [])

  console.log("hello theme 2")

  const handleApply = () => {
      localStorage.setItem("theme" , selectedTheme);
      
console.log("" ,selectedTheme)

    const chatBody = document.querySelector(".chat-body");
    if (chatBody && selectedTheme) {
    ///  chatBody.style.backgroundImage = `url(${selectedTheme})`;
      chatBody.style.backgroundSize = "cover";
      chatBody.style.backgroundPosition = "center";
      chatBody.style.backgroundRepeat = "no-repeat";
      handleCancel();
    } else {
      console.warn("⚠️ No theme selected or .chat-body not found!");
    }

  };

  const handleCancel = () => {
    setIsThemeOpen(false)
  };




  return (
    <MsgContext.Provider
      value={{ send, setSelectedTheme , selectedTheme , setsend, sendMessage, image, setimage ,themes , handleApply, handleCancel , isThemeOpen , setIsThemeOpen}}
    >
      {children}
    </MsgContext.Provider>
  );
};

export const useMsgFunctions = () => useContext(MsgContext);
