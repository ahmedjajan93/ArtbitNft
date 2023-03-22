/** @format */

import React from "react";
import Icons from "./Icons";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="  bg-Black2   min-h-screen relative z-30 ">
      <div className="top-[5vh] absolute bottom-0 right-0 left-[80vw] bg-Pink blur-[250px] -z-10 w-48 h-96"></div>
      <div className="flex flex-col lg:flex-row items-center  max-sm:space-y-16 lg:justify-between md:space-y-20 lg:space-y-0  container mx-auto ">
        <div className="flex flex-col justify-center  max-[834px]:items-center  max-[834px]:text-center max-sm:items-center space-y-10  ">
          <div className="flex text-[26px] mt-8">
            <h1 className="font-bold text-White">Art</h1>
            <h1 className="text-Pink font-bold">BIT</h1>
          </div>
          <h4 className="text-gray-500 max-w-[300px] max-sm:text-center md:max-w-[350px] ">
            Enter your email to get notified by ArtBit for latest updates.
          </h4>
          <Icons color="white" size={24} />
          <div className="relative">
            <input
              type="text"
              placeholder="Email Address"
              className=" w-72 md:w-96 h-[60px] rounded-full secondaryGradient placeholder:focus:opacity-0 pl-6 placeholder:text-white"
            />

            <FaLocationArrow className=" absolute md:top-[23px] top-[20px] bottom-0 right-0 left-[229px] md:left-[329px] text-Pink w-6 h-6 " />
          </div>
        </div>

        <div className="flex justify-center md:space-x-32 max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:space-y-4  ">
          <div className="flex flex-col  space-y-10 ">
            <h1 className="text-White">ArtBit</h1>
            <ul className="text-gray-500 flex flex-col space-y-4">
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">All NFTs</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-10">
            <h1 className="text-White">My Account</h1>
            <ul className="text-gray-500 flex flex-col space-y-4">
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Favourites</a>
              </li>
              <li>
                <a href="#">Watchlist</a>
              </li>
              <li>
                <a href="#">My Collections</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  space-y-10 ">
            <h1 className="text-White">ArtBit</h1>
            <ul className="text-gray-500 flex flex-col space-y-4">
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">All NFTs</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-10">
            <h1 className="text-White">My Account</h1>
            <ul className="text-gray-500 flex flex-col space-y-4">
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Favourites</a>
              </li>
              <li>
                <a href="#">Watchlist</a>
              </li>
              <li>
                <a href="#">My Collections</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container  mx-auto space-y-10 flex flex-col max-sm:items-center mb-44 ">
        <hr className=" lg:w-[95vw] w-[85vw]  border border-Black  text-center h-[1px] mt-16  overflow-hidden  " />

        <ul className="flex items-center space-x-10 text-gray-500 justify-center lg:justify-start ">
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <hr className=" lg:w-[95vw] w-[85vw]  border border-Black  text-center h-[1px] mt-16  overflow-hidden  " />
        <p className="text-White self-center  ">
          © Artbit, Inc @ All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
