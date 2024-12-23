import React, { useEffect, useRef } from "react";
import ChatInput from "./chatInput";

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

  return (
    <>
      <div className="w-[100%] rounded-md h-[97%] bg-zinc-900 flex flex-col justify-center items-center pb-5 lg:pb-20 md:pb-12">
        {/* Message Display Area */}
       

        <div
  ref={messagesContainerRef}
  style={{
    overflowY: "auto",
    scrollbarWidth: "none", // For Firefox
    msOverflowStyle: "none", // For IE and Edge
  }}
  className="flex flex-col w-[80%] lg:w-[60%] justify-start gap-4 h-[80%] pt-20"
>
  {message?.map((msg, index) => (
    <div
      key={index}
      className={`flex ${
        msg.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`p-3 rounded-md text-white max-w-[75%] inline-block ${
          msg.sender === "user"
            ? "bg-zinc-900 text-right"
            : "bg-[#101214] text-left"
        }`}
      >
        {msg.text}
      </div>
    </div>
  ))}
</div>




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
