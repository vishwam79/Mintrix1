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


  const username = "mintrix";
  const password = "mintrix@123";
  const credentials = btoa(`${username}:${password}`);

  const handleSendMessage = (messages) => {
    setMessage([...message, { sender: "user", text: messages }]);
    setIsFirstMessage(false);
    setLoading(true);

    const handleApi = async () => {
      try {
        const response = await axios.post("https://n8n.mintrix.in/webhook/9ba11544-5c4e-4f91-818a-08a4ecb596c5", [{
          sessionId: "b1cc5e2e6eb4f97990e46a568f4d481",
          action: "sendMessage",
          chatInput: messages,
        }],
        {
          headers: {
            Authorization: `Basic ${credentials}`, // Set Auth Header
            "Content-Type": "application/json",
          },
        }
      );

        const result = response.data.output;

        
          setMessage((prev) => [...prev, { sender: "AI", text: result }]);
          setLoading(false);
     
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
