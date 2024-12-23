"use client";
import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbBus } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { MdArrowOutward, MdOutlineMenu } from "react-icons/md";

import Mobilenav from "../../components/Navbar/Mobilenav.jsx";
import "../../components/Navbar/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setOpen(true); // Ensure this is set on client-side
  }, []);

  return (
    <div className="flex justify-center">
      <nav className="backdrop-blur-md bg-opacity-50 bg-gray-800 rounded-lg shadow-lg fixed w-full z-10 px-4 py-3">
        <div className="flex justify-between items-center mx-auto max-w-[1280px]">
          {/* Mobile Menu and Logo */}
          <div className="flex items-center gap-4">
            <MdOutlineMenu
              onClick={() => setMenu(!menu)}
              className="h-8 w-8 cursor-pointer text-white md:hidden"
            />
            <a href="/">
              <img
                className="w-10 h-10 md:hidden"
                src="/mintrix-logo.png"
                alt="Mintrix"
              />
            </a>

            <a href="/" className="hidden md:block">
              <h1 className="text-2xl font-semibold text-white">Mintrix</h1>
            </a>
          </div>

          {/* Menu Links */}
          <ul className="hidden md:flex gap-8 items-center text-white">
            <li className="flex items-center gap-1 cursor-pointer hover:underline">
              Product <RiArrowDropDownLine />
            </li>
            <li className="cursor-pointer hover:underline">Pricing</li>
            <li className="cursor-pointer hover:underline">Affiliate</li>
            <li className="cursor-pointer hover:underline">Terms</li>
            <a href="/chat">
              <li className="flex items-center gap-1 cursor-pointer hover:underline">
                Chat with Mitrix
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 w-2.5 h-2.5 rounded-full ml-1"></span>
              </li>
            </a>
          </ul>

          {/* CTA Button */}
          <a href="/chat">
            {" "}
            <button className="md:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded text-white text-sm flex">
              Get started for FREE <MdArrowOutward />
            </button>
          </a>
        </div>

        {/* Mobile Nav */}
        {menu && (
          
            
            <Mobilenav setMenu={setMenu}/>
            
          
        )}

        
      </nav>
    </div>
  );
};

export default Navbar;
