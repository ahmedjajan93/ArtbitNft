/** @format */

import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-8 flex flex-col">
      <div className="flex justify-between items-start">
        <div className="relative">
          <motion.img
            src="../../assets/imgs/hearo1.png"
            alt=""
            className="object-cover lg:w-60 lg:h-60 w-30 h-30 md:ml-0 lg:ml-0 ml-10 "
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: -5, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 80,
              duration: 4,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          />
          <div className="top-8 absolute bottom-0 right-20 left-0 bg-Pink blur-[130px] -z-10 w-48 h-96"></div>
        </div>

        <div className="flex flex-col space-y-6 items-center justify-center container mx-auto md:mr-16 ">
          <div className="flex flex-col relative  ">
            <motion.h1
              className="text-[40px] lg:text-[80px] rotate-1 font-bold self-center "
              initial={{ scale: 0.5, x: -200 }}
              animate={{ scale: 1, x: 0, rotate: "1deg" }}
              transition={{ duration: 2 }}
            >
              Buy and Sell{" "}
            </motion.h1>
            <motion.div
              className="bg-Pink w-90 h-[55px]  lg:h-[160px] text-center rotate-4 "
              initial={{ scale: 0.5 }}
              animate={{ scale: 1, rotate: "-5deg" }}
              transition={{ duration: 2 }}
            >
              <h1 className="lg:text-[80px] text-[20px]   font-bold text-white px-20 py-2">
                Digital Art and{" "}
              </h1>
            </motion.div>
            <motion.h1
              className="lg:text-[80px] text-[40px]  rotate-1 font-bold self-center"
              initial={{ scale: 0.5, x: 200 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              NFTS
            </motion.h1>
          </div>
          <motion.div
            className="flex flex-col text-center space-y-10"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          >
            <p className="text-md lg:text-2xl max-w-2xl self-center ">
              The World's Largest Digital Marketplace For Crypto Collectibles
              And Non-Fungible Tokens
            </p>
            <div>
              <div className="flex items-center space-x-12 justify-center">
                {" "}
                <Button
                  text="Explore"
                  style="px-10 py-3 bg-Pink rounded-full text-white font-bold"
                />
                <Button
                  text="Create"
                  style="px-10 py-3 border border-Pink  rounded-full text-Pink font-bold"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="relative  ">
          <motion.img
            src="../../assets/imgs/hearo2.png"
            alt=""
            className="object-cover w-40 h-60 "
            initial={{ y: -60 }}
            animate={{ y: -5 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          />
          <div className="top-10 absolute bottom-0 right-0 left-0  bg-Pink blur-[100px] -z-10"></div>
        </div>
      </div>
      <div className="flex justify-between  mx-10   ">
        {" "}
        <div className="relative  ">
          <motion.img
            initial={{ x: -100, scale: 0.4, y: -100 }}
            animate={{ x: 0, scale: 1, y: 0 }}
            transition={{ duration: 2 }}
            src="../../assets/imgs/hero3.png"
            alt=""
            className="object-cover w-96 h-96 "
          />
          <div className="top-8 absolute bottom-0 right-20 left-0 bg-Pink blur-[130px] -z-10 w-48 h-96"></div>
        </div>
        <div className="relative">
          <motion.img
            initial={{ x: 100, scale: 0.4, y: -100 }}
            animate={{ x: 0, scale: 1, y: 0 }}
            transition={{ duration: 2 }}
            src="../../assets/imgs/hero4.png"
            alt=""
            className="object-cover w-60 h-60 "
          />
          <div className="top-8 absolute bottom-0 right-20 left-0 bg-Pink blur-[130px] -z-10 w-48 h-96"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
