import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

const Chat = ({ isFirstMessage, onSendMessage }) => {
  const [input, setInput] = useState("");

  const onSubmit = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit();
    }
  };

  const handleTextClick = (text) => {
    setInput(text);
  };

  return (
    <>
      <div className="fixed bottom-8 md:bottom-4 w-full flex flex-col items-center justify-center px-4">
        {/* Input Container */}
        <div className="relative w-[94%] max-w-[900px]">
          <input
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            value={input}
            className="w-full outline-none bg-gradient-to-t from-[#090b0b] via-black to-black border border-gray-800 pr-12 pl-4 py-3 rounded-full text-gray-300 text-"
            placeholder="Enter a prompt here..."
          />
          <FaLocationArrow
            onClick={onSubmit}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 text-white cursor-pointer"
          />
        </div>
        {/* Info Text */}
        <p className="text-[12px] text-gray-400 py-2 text-light hidden sm:block">
          Mintrix may display inaccurate info, including about people, so
          double-check its responses. Your privacy & Mintrix Apps
        </p>
      </div>
    </>
  );
};

export default Chat;
