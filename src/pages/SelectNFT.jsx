/** @format */

import React from "react";
import { Header } from "../components";
import { motion } from "framer-motion";

const SelectNFT = () => {
  return (
    <div>
      <div className="bg-[url('./assets/imgs/Header.png')] w-full h-[200px] bg-cover bg-center bg-no-repeat  md:h-[350px] text-White -z-10  ">
        <Header />
      </div>
      <section className="flex flex-col items-center  justify-center space-y-10 mt-16 text-center mb-16">
        <h4 className="text-gray-500  max-w-[22rem] md:max-w-2xl leading-8">
          Choose <span className="text-Black1 font-bold"> “Single” </span> if
          you want your collectible to be one of a kind or
          <span className="text-Black1 font-bold">“Multiple”</span> if you want
          to sell one collectible multiple times
        </h4>
        <div className="flex flex-col md:flex-row items-center gap-20  ">
          <div className="flex flex-col items-center bg-gray-200 w-[80%] h-[60%] md:w-[50%] md:h-[50%] rounded-lg cursor-pointer">
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 2 }}
              src="./assets/imgs/snft.png"
              alt=""
              className="py-4 px-3 object-cover"
            />
            <h4 className="text-gray-500 pt-3 pb-6">Single NFT</h4>
          </div>
          <div className="flex flex-col items-center bg-gray-200 w-[80%] h-[60%] md:w-[50%] md:h-[50%]  rounded-lg cursor-pointer">
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 2 }}
              src="./assets/imgs/mnft.png"
              alt=""
              className="py-4 px-3 object-cover"
            />
            <h4 className="text-gray-500 pt-3 pb-6">Multiple NFT</h4>
          </div>
        </div>
        <h4 className="text-gray-500  max-w-[22rem] md:max-w-3xl leading-8">
          We do not own your private keys and cannot access your funds without
          your confirmation.
        </h4>
      </section>
    </div>
  );
};

export default SelectNFT;
