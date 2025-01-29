import React from "react";
import "../../components/Navbar/Navbar.css";
import { MdOutlineMenu } from "react-icons/md";
import Sidebar from "./Sidebar";
const ChatNavbar = ({ setIsOpen }) => {

  const handleClick =()=>{



  }



  return (
    <div className="flex">
      <nav className="backdrop-blur-md bg-opacity-50  rounded-lg shadow-lg fixed w-full z-10 px-4 py-2">
        <div className="flex md:ml-[120px] max-w-[1280px]">
          {/* Mobile Menu and Logo */}
          <div className="flex items-center justify-start mt-2">
            <div className="flex gap-10 items-center justify-center">
              <div className="bg-gray-900 cursor-pointer flex justify-center items-center w-8 h-8 md:hidden ">
                {" "}
                <MdOutlineMenu onClick={()=> setIsOpen(true) } className="w-5 h-5 text-white" />
              </div>{" "}
              <div className="flex justify-center items-center gap-3">
                {" "}
                <a href="/">
                  <img
                    className="w-5 h-5 "
                    src="/mintrix-logo.png"
                    alt="Mintrix"
                  />
                </a>
                <a href="/" className="">
                  <h1 className="text-[20px] uppercase mb-[2px] font-semibold text-white">
                    Mintrix
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ChatNavbar;
