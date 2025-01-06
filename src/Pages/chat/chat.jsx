import React, { useState } from "react";
import Sidebar from "../../components/ChatBot/Sidebar.jsx";
import ChatWindow from "../../components/ChatBot/ChatWindow.jsx";
import Navbar from "../../components/ChatBot/ChatNavbar.jsx";
import axios from "axios";
import parse from "html-react-parser";





const chat = () => {
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [message, setMessage] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  const formatResponse = (text) => {
    // Convert plain text to structured HTML
    let html = text
      .replace(
        /-\s\*\*(.+?):\*\*\s(.+)/g,
        "<li><strong>$1:</strong> $2</li>"
      ) // Format bullet points with bold headings
      .replace(/\n/g, "<br>") // Convert newlines to <br>
      .replace(/Here are some key ways Mintrix can help improve education:/g, "<p>Here are some key ways Mintrix can help improve education:</p>")
      .replace(/Mintrix helps improve education.+?\./, (match) => `<p>${match}</p>`) // Wrap intro paragraph
      .replace(
        /By leveraging these features.+\./,
        (match) => `<p>${match}</p>`
      ) // Wrap concluding paragraph
      .replace(/<li>.*<\/li>/g, "<ul>$&</ul>"); // Wrap <li> items in <ul>
  
    return parse(html); // Parse HTML into React components
  };
  

  const handleSendMessage = (messages) => {
    setMessage([...message, { sender: "user", text: messages }]);
    setIsFirstMessage(false);

    const handleApi = async () => {
      try {
        const response = await axios.post("http://localhost:3000/chat", {
          query: messages,
        });


        const AiResponse = response.data;
        // const result = response.data; // Access the parsed data directly
        // console.log(result.response.message);

        // const AiResponse = formatResponse(result.response.message)

        setTimeout(() => {
          setMessage((prev) => [
            ...prev,
            { sender: "AI", text: AiResponse },
          ]);
        }, 1500);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    handleApi();
  };

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />

      <div className="w-full  h-screen flex justify-between items-center mx-auto  text-white">
        <div className=" md:w-[70px] z-10 max-w-[400px] h-full bg-gray-900  ">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="w-full bg-[url('/chatbotbg.png')] bg-cover flex justify-center items-center mx-auto h-full filter bg-">
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
