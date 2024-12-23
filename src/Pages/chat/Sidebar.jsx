import React from "react";
import './sidebar.css'
import { MdArrowOutward } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen fixed bg-zinc-900 left-0 top-0 flex flex-col justify-start  rounded-s-sm items-start">
      <div className="flex gap-5 justify-start ml-10 items-center pt-10 z-50">
        {" "}
        <img src="/mintrix-logo.png" alt="" className="w-8 h-8" />
       <a href="/"> <h2 className="text-white font-semibold text-2xl">Mintrix</h2></a>
      </div>


<div className="mobilenav">
      <div className="mobilenav-content ">
        <div className="mobilenav-a">
          <ul className="mobilenav-list ">
           <a href="/"> <li className="mobilenav-item">home</li></a>
            <li className="mobilenav-item">Product</li>
            <a href="/chat">
              <li className="mobilenav-item mobilenav-hover">Our Chatbots</li>
            </a>
            <li className="mobilenav-item">Contact</li>
          </ul>
        </div>

        <button className="mobilenav-button">
          Get started for FREE <MdArrowOutward className="btn-icon" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
