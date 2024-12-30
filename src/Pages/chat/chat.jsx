import React, { useState } from "react";
import Sidebar from "../../components/ChatBot/Sidebar.jsx";
import ChatWindow from "../../components/ChatBot/ChatWindow.jsx";
import Navbar from "../../components/ChatBot/ChatNavbar.jsx";

const chat = () => {
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [message, setMessage] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = (messages) => {
    setMessage([...message, { sender: "user", text: messages }]);
    setIsFirstMessage(false);

    setTimeout(() => {
      setMessage((prev) => [
        ...prev,
        { sender: "AI", text: "Mintrix Ai's mission is to be committed to being a long teze partner in educational transformation by stfering ongoing support, training, and continuous improvement to ensure clients needs are always met." },
      ]);
    }, 1500);
  };

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />

      <div className="w-full  h-screen flex justify-between items-center mx-auto  text-white">
        <div className=" md:w-[70px] z-10 max-w-[400px] h-full bg-gray-900  ">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="w-full bg-[url('/chatbotbg.png')] bg-cover flex justify-center items-center mx-auto h-full ]">
          <div>
            <ChatWindow
              message={message}
              isFirstMessage={isFirstMessage}
              onSendMessage={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default chat;
