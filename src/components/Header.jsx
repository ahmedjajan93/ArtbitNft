/** @format */

import React, { useState } from "react";
import Switcher from "../utils/Switcher";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="container mx-auto   ">
      <div className=" flex items-center md:space-x-60 justify-between mr-4 md:mr-0  ">
        <div className="flex items-center lg:space-x-24 space-x-8  justify-center mt-6 lg:mt-3 ml-5 md:ml-0">
          <div className="flex text-[26px]">
            <h1 className="font-bold">Art</h1>
            <h1 className="text-Pink font-bold">BIT</h1>
          </div>
          <input
            type="text"
            placeholder="Search here"
            className="w-44 lg:w-80 h-12   rounded-2xl border focus:outline-none  placeholder:text-black placeholder:focus:opacity-0 pl-6 "
          />
        </div>
        {/* Hamburger menu */}
        <div className=" mt-6 lg:mt-[58px] ml-4">
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#">Explore</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#">Stats</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#">Create</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex  ">
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Stats</a>
            </li>
            <li>
              <a href="Create">Contact</a>
            </li>
            <li className="w-[33px] h-[33px] rounded-full bg-White border flex items-center justify-center ">
              <FaShoppingCart />
            </li>
            <div className="mt-[2px]">
              <Switcher />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
