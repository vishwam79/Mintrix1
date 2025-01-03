import React, { useEffect, useRef } from "react";
import ChatInput from "./chatInput.jsx";
import { FaUser } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const ChatWindow = ({ message, isFirstMessage, onSendMessage }) => {
  // Reference for the message display area
  const messagesContainerRef = useRef(null);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [message]);

  const handleTextClick = (text) => {
    onSendMessage(text);
  };

  return (
    <>
      <div className="w-[100%] max-h-[90vh]  rounded-md   flex flex-col justify-between items-center mx-auto pb-10 lg:pb-20 md:pb-12">
        {/* Message Display Area */}

        {!isFirstMessage ? (
          <div
            ref={messagesContainerRef}
            style={{
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none", // For IE and Edge
            }}
            className="flex w-full text-start flex-col max-w-[1000px]  gap-4 w-full h-full pt-20"
          >
            {message?.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-start" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-md text-white  inline-block ${
                    msg.sender === "user" ? "text-left" : " text-left"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <div className="flex gap-4 ">
                      {" "}
                      <FaUser className="w-4 h-4" />
                      {msg.text}{" "}
                    </div>
                  ) : (
                    <div className="flex gap-4 ">
                      {" "}
                      <img src="/mintrix-logo.png" className="w-5 h-5" alt="" />
                      {msg.text}{" "}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-full">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Hello, Team
                </span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                How can I help you today?
              </h2>
            </div>

            <div className="flex flex-col justify-center items-center px-4">
              {isFirstMessage ? (
                <div className="flex justify-center flex-col flex-wrap sm:flex-row sm:gap-2 lg:gap-4 mt-10 md:20">
                  {[
                    "How Mintrix help us to improve education?",
                    "Why Mintrix is good for us?",
                    "Key features of Mintrix?",
                    "How to use Mintrix?",
                  ].map((text, index) => (
                    <div
                      key={index}
                      onClick={() => handleTextClick(text)} // Handle click
                      className="w-full md:w-48 md:h-40 border-[1px] border-gray-600 p-2 m-2 justify-between flex md:flex-col items-end rounded-lg cursor-pointer hover:bg-black"
                    >
                      <div className="text-[16px] text-gray-100">{text}</div>
                      <div className="w-6 h-6 bg-gray-100 flex justify-center items-center rounded-2xl cursor-pointer">
                        {" "}
                        <FaLocationArrow className="w-5 h-5  rounded-md text-black p-1" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}

        {/* Input Component */}
        <ChatInput
          isFirstMessage={isFirstMessage}
          onSendMessage={onSendMessage}
        />
      </div>
    </>
  );
};

export default ChatWindow;
