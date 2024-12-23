"use client";
import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbBus } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { MdArrowOutward, MdOutlineMenu } from "react-icons/md";

import Mobilenav from "./Mobilenav.jsx";
import "./Navbar.css";

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
          <div className="md:hidden bg-gray-900 p-4 rounded-lg shadow-lg">
            <Mobilenav setMenu={setMenu} />
            <p
              onClick={() => setMenu(false)}
              className="text-white text-right font-bold cursor-pointer"
            >
              Close
            </p>
          </div>
        )}

        {/* Bottom Info Bar */}
        {open && (
          <div className="mt-4 bg-[#B852D7] bg-opacity-35 p-2 lg:flex justify-center items-center rounded-md">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex justify-between gap-4">
                <TbBus className="text-yellow-400 text-xl" />
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <RxCross2
                  onClick={() => setOpen(false)}
                  className="text-white  lg:hidden md:hidden text-lg text-end font-bold cursor-pointer"
                />
              </div>
              <button className="bg-white max-w-28 text-black text-xs px-2 py-1 rounded flex items-center gap-2">
                Try it now <MdArrowOutward className="text-black w-4 h-4" />
              </button>
            </div>
            <RxCross2
              onClick={() => setOpen(false)}
              className="text-white hidden sm:block  ml-28 text-lg text-end font-bold cursor-pointer"
            />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
