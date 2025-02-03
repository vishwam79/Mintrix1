import React, { useState } from "react";
import Sidebar from "../../components/ChatBot/Sidebar.jsx";
import ChatWindow from "../../components/ChatBot/ChatWindow.jsx";
import Navbar from "../../components/ChatBot/ChatNavbar.jsx";
import axios from "axios";



const chat = () => {
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [message, setMessage] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = (messages) => {
    setMessage([...message, { sender: "user", text: messages }]);
    setIsFirstMessage(false);
    setLoading(true);

    const handleApi = async () => {
      try {
        const response = await axios.post("http://localhost:3000/chat", {
          query: messages,
        });

        const result = response.data;

        setTimeout(() => {
          setMessage((prev) => [...prev, { sender: "AI", text: result }]);
          setLoading(false);
        }, 100); 
      } catch (error) {
        console.error("API error:", error);
        setMessage((prev) => [...prev, { sender: "AI", text: "Hello ! How can i help You ?  " }]);
        setLoading(false);
      }
    };

    handleApi();
  };

  return (
    <>
      <div className="z-20">
        <Navbar setIsOpen={setIsOpen} />
      </div>
      <div className="w-full h-screen flex justify-between items-center mx-auto text-white">
        <div className="md:w-[70px] max-w-[400px] h-full bg-gray-900 z-30">
          <Sidebar 
          
          message={message}
          
          isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="w-full relative bg-[url('/chatbotbg.png')] bg-cover flex justify-center items-center mx-auto h-full filter">
          <div className="absolute w-full h-full backdrop-blur-xl"></div>
          <div className="z-20">
            <ChatWindow
              message={message}
              isFirstMessage={isFirstMessage}
              onSendMessage={handleSendMessage}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default chat;
