import React, { useState } from "react";

import { MdOutlineMenu } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { MdOutlineHistory } from "react-icons/md";

import RecentChat from "./recentChat.jsx";

const Sidebar = ({ isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className=" md:block hidden">
        <nav className=" bg-gray-900  shadow-lg h-screen left-0 max-w-[70px] fixed w-full z-10 px-4 py-2">
          <div className="flex h-screen flex-col justify-between items-center gap-10">
            <div className="flex flex-col justify-center gap-20 mt-2 items-center">
              <div className="w-10 h-10 rounded-sm cursor-pointer bg-gray-800 flex justify-center items-center">
                {" "}
                <MdOutlineMenu
                  onClick={() => setIsOpen(true)}
                  className="w-6 h-6 "
                />
              </div>
              <div className="w-10 h-10 rounded-sm bg-gray-800 flex justify-center items-center">
                {" "}
                <FiPlus className="w-6 h-6 " />
              </div>
            </div>

            <div className="w-10 h-10 rounded-sm mb-4 bg-gray-800 flex justify-center items-center">
              {" "}
              <MdOutlineHistory className="w-6 h-6 " />
            </div>
          </div>
        </nav>
      </div>

      {isOpen ? (
        <div className="">
          <nav className=" text-white bg-gray-900 border-r-[0.5px] border-gray-900  shadow-lg h-screen left-0 max-w-[300px] fixed w-full z-10 px-4 py-2 transition-all duration-300">
            <div className="flex h-screen flex-col justify-between gap-10">
              <div className="flex flex-col  gap-10  ">
                <div className="flex justify-start gap-10 mt-2">
                  <div className="w-10 h-10 hover:bg-gray-800 flex cursor-pointer justify-center items-center">
                    {" "}
                    <MdOutlineMenu
                      onClick={() => setIsOpen(false)}
                      className="w-6 h-6 "
                    />
                  </div>

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
                <div>
                  <a href="/chat"><div className="max-w-max px-6 py-3 gap-3 rounded-full  bg-gray-800 flex justify-start cursor-pointer pl-4 items-center">
                    {" "}
                    <FiPlus className="w-5 h-5 " />
                    <h2 className="text-[13px] ">New Chat</h2>
                  </div>

                  </a>

                  {/* RECENTS CHAT */}

                  <RecentChat />



                </div>
              </div>

              <div className="w-8 h-8 rounded-sm bg-gray-800 flex justify-center items-center">
                {" "}
                <MdOutlineHistory className="w-5 h-5 " />
              </div>
            </div>
          </nav>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
