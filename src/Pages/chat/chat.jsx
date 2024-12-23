import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import Navbar from "./ChatNavbar";

const chat = () => {
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [message, setMessage] = useState([]);

  const handleSendMessage = (messages) => {
    setMessage([...message, { sender: "user", text: messages }]);
    setIsFirstMessage(false);

    setTimeout(() => {
      setMessage((prev) => [
        ...prev,
        { sender: "AI", text: "Hello How can i help you !" },
      ]);
    }, 1500);
  };

  return (

    <>

<div className="block md:hidden">
  <Navbar />
</div>

    <div className=" w-[100%] h-screen justify-center bg-[#09090B] flex item-center gap-3 text-white">
     <div className="w-[20%] hidden md:block left-0 "> <Sidebar /></div>

     <div className="w-full right-0 flex justify-center items-center">
  <ChatWindow
    message={message}
    isFirstMessage={isFirstMessage}
    onSendMessage={handleSendMessage}
  />
</div>

      
    </div>

    </>
  );
};

export default chat;
