import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <div className="absolute mt-20 inset-0 flex flex-col items-center justify-center  px-4">
      <div className="max-w-[1280px] w-full mx-auto bg-transparent flex flex-col justify-center items-center gap-4 text-center">
        {/* Description */}

        <img src="/mintrix-logo.png" alt="" className="w-20 h-20 md:w-40 md:h-40" />

        {/* Title */}
        <h1 className="md:text-6xl text-3xl font-base text-gray-200 px-4 sm:px-8 ">
          Mintrix Ai
        </h1>
        <h2 className="md:text-4xl text-2xl font-base text-gray-200 px-4 sm:px-8 ">
          AI-Quipping Schools
        </h2>

        <h4 className="md:text-2xl  font-base text-gray-200 px-4 sm:px-8 lg:leading-relaxed leading-normal">
          Empowering Educators, Transforming Schools, Automate Administrations
          with AI
        </h4>

        {/* Input Field */}
        <div className="border-zinc-800 p-1 mt-6 border rounded-xl w-full sm:w-[80%] lg:w-[50%] mx-auto flex  sm:flex-row items-center bg-gradient-to-t from-[#090b0b] via-gray-900 to-black">
          <input
            className="outline-none bg-transparent pl-4 py-3 w-full sm:flex-grow text-gray-200"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="hidden sm:block text-sm w-[40%] px-2 py-3 mt-3 sm:mt-0 sm:ml-2 rounded-lg bg-gradient-to-r from-[#B852D7] via-[#AE5BE9] to-[#C65A94] text-white lg:flex justify-center items-center gap-2">
            Join the waitlist <MdArrowOutward className="btn-icon" />
          </button>
        </div>

        <p className=" text-xl mt-5 text-white">“Your School. Your Vision. Powered by MINTRIX.”</p>
        <button className=
        
        "text-sm lg:hidden px-5 py-3 mt-1 sm:mt-0 sm:ml-2 rounded-lg bg-gradient-to-r from-[#B852D7] via-[#AE5BE9] to-[#C65A94] text-white flex items-center gap-2">
          Join the waitlist <MdArrowOutward className="btn-icon" />
        </button>


      </div>
      
    </div>
  );
};

export default Header;
