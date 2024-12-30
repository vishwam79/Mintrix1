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
    setInput(text); // Set the input value to the clicked text
  };

  return (
    <>
      <div className=" max-w-[90vw] fixed bottom-4 w-full flex flex-col justify-center items-center px-4 mx-auto  sm:pt-0">
        <div className="relative mt-10 mx-auto items-center w-[90vw] md:w-[70%] lg:w-[60%] px-4 bottom-0">
          <input
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            value={input}
            className="w-full outline-none bg-gray-900 border border-gray-800 pr-10 pl-10 py-3 mx-auto rounded-full  text-gray-300"
            placeholder="Enter a prompt here..."
          />
          <FaLocationArrow
            onClick={onSubmit}
            className="absolute top-1/2 right-12 transform -translate-y-1/2 w-5 h-5 text-white cursor-pointer"
          />
        </div>
        <p className="text-[12px] text-gray-400 py-2 text-light hidden sm:block">Mintrix may display inaccurate info, including about people, so double-check its responses. Your privacy & Mintrix Apps</p>
      </div>
    </>
  );
};

export default Chat;
