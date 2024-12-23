import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Header = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center  px-4">
      <div className="max-w-[1280px] mx-auto bg-transparent flex flex-col justify-center items-center gap-8 text-center">
        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg text-gray-200 px-4 sm:px-8">
          Unlock the Power with Mintrix: Your Ultimate AI Companion!
        </p>
        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-200 px-4 sm:px-8 lg:leading-relaxed leading-normal">
          Revolutionize Your Conversations with 
          Mintrix: The Ultimate AI Chatbot!
        </h1>
        {/* Input Field */}
        <div className="border-zinc-800 p-1 border rounded-xl w-full sm:w-[80%] lg:w-[50%] mx-auto flex  sm:flex-row items-center">
          <input
            className="outline-none bg-transparent pl-4 py-3 w-full sm:flex-grow text-gray-200"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="hidden sm:block text-sm w-[40%] px-2 py-3 mt-3 sm:mt-0 sm:ml-2 rounded-lg bg-gradient-to-r from-[#B852D7] via-[#AE5BE9] to-[#C65A94] text-white lg:flex justify-center items-center gap-2">
            Join the waitlist <MdArrowOutward className="btn-icon" />
          </button>
        </div>
        <button className="text-sm lg:hidden px-5 py-3 mt-1 sm:mt-0 sm:ml-2 rounded-lg bg-gradient-to-r from-[#B852D7] via-[#AE5BE9] to-[#C65A94] text-white flex items-center gap-2">
            Join the waitlist <MdArrowOutward className="btn-icon" />
          </button>
      </div>
    </div>
  );
};

export default Header;
